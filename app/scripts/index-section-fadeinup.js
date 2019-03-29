'use strict';

const pageMain = document.querySelector('.page-main');
const advantagesBlock = pageMain.querySelector('.page-main__advantages');
const directionsBlock = pageMain.querySelector('.page-main__directions');
const partnersBlocks = pageMain.querySelectorAll('.page-main__partners');
const aboutBlock = pageMain.querySelector('.page-main__about');

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
  partnersBlocks.forEach((block) => {
    checkOffsetTop(block);
  });
  checkOffsetTop(aboutBlock);
});