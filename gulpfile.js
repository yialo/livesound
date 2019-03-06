/* eslint-disable */

'use strict';

// Variables

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var flatten = require('gulp-flatten');
var gulp = require('gulp');
var mincss = require('gulp-csso');
var minimage = require('gulp-imagemin');
var minjs = require('gulp-terser');
var mozjpeg = require('imagemin-mozjpeg');
var plumber = require('gulp-plumber');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassglob = require('gulp-sass-glob');
var zopfli = require('imagemin-zopfli');

// Task functions

var minsvg = function () {
  return gulp.src('./source/imgraw/*.svg')
    .pipe(minimage([
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
          { removeRasterImages: false },
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
      ]})
    ]))
    .pipe(gulp.dest('./source/img/imgout/'));
}

var minbitmap = function () {
  return gulp.src('./source/imgraw/*.{jpg,png}')
    .pipe(minimage([
      pngquant({ speed: 1, quality: [0.8, 0.8] }),
      zopfli({ more: true }),
      minimage.jpegtran({ progressive: true }),
      mozjpeg({ quality: 90 }),
    ]))
    .pipe(gulp.dest('./source/imgout/'));
}

var cleanbuild = function () {
  return del('./build/');
}

var copyfonts = function () {
  return gulp.src('./source/fonts/*.{woff,woff2}')
    .pipe(gulp.dest('./build/fonts/'));
}

var copysvg = function () {
  return gulp.src('./source/svg/*.svg')
    .pipe(gulp.dest('./build/img/'));
}

var copybitmap = function () {
  return gulp.src('./source/bitmaps/**/*.{jpg,png}')
    .pipe(flatten())
    .pipe(gulp.dest('./build/img/'));
}

var copyvideo = function () {
  return gulp.src('./source/video/*')
    .pipe(gulp.dest('./build/video'));
};

var scripts = function () {
  return gulp.src('./source/js/*.js')
    .pipe(minjs())
    .pipe(gulp.dest('./build/js/'));
}

var style = function () {
  return gulp.src('./source/sass/main.scss')
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./build/css/'))
    .pipe(mincss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
}

var html = function () {
    return gulp.src('./source/pug/*.pug')
      .pipe(plumber())
      .pipe(pug())
      .pipe(gulp.dest('./build/'))
      .pipe(browserSync.stream());
  }

var serve = function () {
  browserSync.init({
    server: './build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch('./source/js/*.js', scripts).on('change', browserSync.reload);
  gulp.watch('./source/sass/**/*.scss', style);
  gulp.watch('./source/pug/**/*.pug', html);
}

// Gulp tasks

gulp.task('build', gulp.series(cleanbuild, copyfonts, copysvg, copybitmap, copyvideo, scripts, style, html));
gulp.task('serve', serve);

gulp.task('imagemin', gulp.parallel(minsvg, minbitmap));
gulp.task('imagecopy', gulp.parallel(copysvg, copybitmap));
