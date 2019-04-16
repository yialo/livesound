'use strict';

const pageMain = document.querySelector('.page-main');
const advantagesBlock = pageMain.querySelector('.page-main__nest--advantages');
const directionsBlock = pageMain.querySelector('.page-main__nest--directions');
const partnersFristBlocks = pageMain
  .querySelector('.page-main__nest--partners-first');
const aboutBlock = pageMain.querySelector('.page-main__nest--about');
const partnersLastBlocks = pageMain
  .querySelector('.page-main__nest--partners-last');

const checkOffsetTop = function checkOffsetTopOfBlock(section) {
  const scrollShift = window.innerHeight;
  const scrolledTop = document.documentElement.scrollTop;
  if (scrolledTop >= section.offsetTop - scrollShift) {
    section.classList.add('animatecss-fadeinup');
  } else {
    section.classList.remove('animatecss-fadeinup');
  }
};

window.addEventListener('scroll', () => {
  checkOffsetTop(advantagesBlock);
  checkOffsetTop(directionsBlock);
  checkOffsetTop(partnersFristBlocks);
  checkOffsetTop(aboutBlock);
  checkOffsetTop(partnersLastBlocks);
});
