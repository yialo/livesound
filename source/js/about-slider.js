'use strict';

const historySlider = document.querySelector('.history__inner');
const sliderButtonPrevious = historySlider.querySelector('.history__control-button--previous');
const sliderButtonNext = historySlider.querySelector('.history__control-button--next');
const historyDateButton1 = historySlider.querySelector('.history__date-button--1');
const historyDateButton2 = historySlider.querySelector('.history__date-button--2');
const historyDateButton3 = historySlider.querySelector('.history__date-button--3');
const historyDateButton4 = historySlider.querySelector('.history__date-button--4');
const historyDateButton5 = historySlider.querySelector('.history__date-button--5');

sliderButtonPrevious.addEventListener('click', () => {
  if (historySlider.classList.contains('js-slide-5')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.add('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-4')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.add('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-3')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.add('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-2')) {
    historySlider.classList.add('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  }
});

sliderButtonNext.addEventListener('click', () => {
  if (historySlider.classList.contains('js-slide-4')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.add('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-3')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.add('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-2')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.remove('js-slide-2');
    historySlider.classList.add('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  } else if (historySlider.classList.contains('js-slide-1')) {
    historySlider.classList.remove('js-slide-1');
    historySlider.classList.add('js-slide-2');
    historySlider.classList.remove('js-slide-3');
    historySlider.classList.remove('js-slide-4');
    historySlider.classList.remove('js-slide-5');
  }
});

historyDateButton1.addEventListener('click', () => {
  historySlider.classList.add('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton2.addEventListener('click', () => {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.add('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton3.addEventListener('click', () => {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.add('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton4.addEventListener('click', () => {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.add('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton5.addEventListener('click', () => {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.add('js-slide-5');
});
