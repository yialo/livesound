/* eslint-disable */

'use strict';

// Variables

const autoprefixer = require('autoprefixer');
const del = require('del');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const jpegtran = require('imagemin-jpegtran');
const mincss = require('gulp-csso');
const minimage = require('gulp-imagemin');
const minjs = require('gulp-terser');
const mozjpeg = require('imagemin-mozjpeg');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassglob = require('gulp-sass-glob');
const server = require('browser-sync').create();
const zopfli = require('imagemin-zopfli');

// Task functions

const minsvg = function mimimizeSvgImages() {
  return gulp
    .src('./source/imgraw/*.svg')
    .pipe(
      minimage([
        minimage.svgo({
          plugins: [
            { addAttributesToSVGElement: false },
            { addClassesToSVGElement: false },
            { cleanupAttrs: false },
            { cleanupEnableBackground: true },
            { cleanupIDs: false },
            { cleanupListOfValues: true },
            { cleanupNumericValues: true },
            { collapseGroups: true },
            { convertColors: true },
            { convertPathData: true },
            { convertShapeToPath: false },
            { convertStyleToAttrs: false },
            { convertTransform: true },
            { inlineStyles: false },
            { mergePaths: true },
            { minifyStyles: false },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: false },
            { prefixIds: false },
            { removeAttrs: true },
            { removeComments: true },
            { removeDesc: true },
            { removeDimensions: true },
            { removeDoctype: true },
            { removeEditorsNSData: true },
            { removeElementsByAttr: false },
            { removeEmptyAttrs: true },
            { removeEmptyContainers: true },
            { removeEmptyText: true },
            { removeHiddenElems: true },
            { removeMetadata: true },
            { removeNonInheritableGroupAttrs: true },
            { removeRasterimg: false },
            { removeScriptElement: true },
            { removeStyleElement: true },
            { removeTitle: true },
            { removeUnknownsAndDefaults: true },
            { removeUnusedNS: true },
            { removeUselessDefs: false },
            { removeUselessStrokeAndFill: true },
            { removeViewBox: false },
            { removeXMLNS: false },
            { removeXMLProcInst: true },
            { sortAttrs: false },
          ],
        }),
      ]),
    )
    .pipe(gulp.dest('./source/imgout/'));
};

const minbitmap = function minimizeBitmapImages() {
  return gulp
    .src('./source/imgraw/*.{jpg,png}')
    .pipe(
      minimage([
        jpegtran({ progressive: true }),
        mozjpeg({ quality: 90 }),
        pngquant({ speed: 1, quality: [0.8, 0.8] }),
        zopfli({ more: true }),
      ]),
    )
    .pipe(gulp.dest('./source/imgout/'));
};

const cleanbuild = function deleteFormerBuildFolder() {
  return del('./dist/');
};

const copyfonts = function copyFontFilesToBuildFolder() {
  return gulp
    .src('./source/fonts/*.{woff,woff2}')
    .pipe(gulp.dest('./build/fonts/'));
};

const copysvg = function copySvgImagesToBuildFolder() {
  return gulp
    .src('./source/svg/**/*.svg')
    .pipe(flatten())
    .pipe(gulp.dest('./build/img/'));
};

const copybitmaps = function copyBitmapImagesToBuildFolder() {
  return gulp
    .src('./source/bitmaps/**/*.{jpg,png}')
    .pipe(flatten())
    .pipe(gulp.dest('./build/img/'));
};

const copyvideo = function copyVideoFilesToBuildFolder() {
  return gulp
    .src('./source/video/**/*.mp4')
    .pipe(flatten())
    .pipe(gulp.dest('./build/video/'));
};

const scripts = function launchJsCompiler() {
  return gulp.src('./source/js/*.js')
    .pipe(minjs())
    .pipe(gulp.dest('./build/js/'));
};

const style = function launchCssCompiler() {
  return gulp
    .src('./source/sass/main.scss')
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./build/css/'))
    .pipe(mincss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(server.stream());
};

const html = function launchHtmlCompiler() {
  return gulp
    .src('./source/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./build/'))
    .pipe(server.stream());
};

const reload = function reloadBrowserSync(done) {
  server.reload();
  done();
};

const serve = function launchBrowserSync(done) {
  server.init({
    cors: true,
    notify: false,
    open: true,
    server: { baseDir: './build/' },
  });
  done();
  gulp.watch('./source/pug/**/*.pug', html);
  gulp.watch('./source/sass/**/*.scss', style);
};

const watchJs = function watchForJavascriptFiles() {
  return gulp.watch('./source/js/*.js', gulp.series(scripts, reload));
};

const watchSvg = function watchForSvgFiles() {
  return gulp.watch(
    './source/svg/**/*.svg',
    gulp.series(copysvg, reload),
  );
};

const watchBitmaps = function watchForBitmapFiles() {
  return gulp
    .watch(
      './source/bitmaps/**/*.{jpg,png}',
      gulp.series(copybitmaps, reload),
    );
};

// Gulp tasks

gulp.task('svgmin', minsvg);
gulp.task('svgcopy', copysvg);
gulp.task('bitmapmin', minbitmap);
gulp.task('bitmapcopy', copybitmaps);
gulp.task('imagemin', gulp.parallel('svgmin', 'bitmapmin'));
gulp.task('imagecopy', gulp.parallel('svgcopy', 'bitmapcopy'));
gulp.task('copyassets', gulp.parallel(copyfonts, 'imagecopy', copyvideo));
gulp.task('watchForAll', gulp.parallel(watchJs, watchSvg, watchBitmaps));
gulp.task('build', gulp.series(cleanbuild, 'copyassets', scripts, style, html));
gulp.task('serve', gulp.series(serve, 'watchForAll'));

gulp.task('default', gulp.series('build', 'serve'));
