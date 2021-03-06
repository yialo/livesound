'use strict';

const acknowledgementsControlPrevious = document
  .querySelector('.acknowledgements__slider-control--previous');
const acknowledgementsControlNext = document
  .querySelector('.acknowledgements__slider-control--next');
const acknowledgementsSlider = document.querySelector('.acknowledgements__list');

acknowledgementsControlNext.addEventListener('click', () => {
  if (acknowledgementsSlider.classList.contains('js-slide-1')) {
    acknowledgementsSlider.classList.remove('js-slide-1');
    acknowledgementsSlider.classList.add('js-slide-2');
    acknowledgementsControlPrevious.classList.remove('is-disabled');
  } else if (acknowledgementsSlider.classList.contains('js-slide-2')) {
    acknowledgementsSlider.classList.remove('js-slide-2');
    acknowledgementsSlider.classList.add('js-slide-3');
  } else if (acknowledgementsSlider.classList.contains('js-slide-3')) {
    acknowledgementsSlider.classList.remove('js-slide-3');
    acknowledgementsSlider.classList.add('js-slide-4');
  } else if (acknowledgementsSlider.classList.contains('js-slide-4')) {
    acknowledgementsSlider.classList.remove('js-slide-4');
    acknowledgementsSlider.classList.add('js-slide-5');
  } else if (acknowledgementsSlider.classList.contains('js-slide-5')) {
    acknowledgementsSlider.classList.remove('js-slide-5');
    acknowledgementsSlider.classList.add('js-slide-6');
  } else if (acknowledgementsSlider.classList.contains('js-slide-6')) {
    acknowledgementsSlider.classList.remove('js-slide-6');
    acknowledgementsSlider.classList.add('js-slide-7');
    acknowledgementsControlNext.classList.add('is-disabled');
  }
});

acknowledgementsControlPrevious.addEventListener('click', () => {
  if (acknowledgementsSlider.classList.contains('js-slide-2')) {
    acknowledgementsSlider.classList.remove('js-slide-2');
    acknowledgementsSlider.classList.add('js-slide-1');
    acknowledgementsControlPrevious.classList.add('is-disabled');
  } else if (acknowledgementsSlider.classList.contains('js-slide-3')) {
    acknowledgementsSlider.classList.remove('js-slide-3');
    acknowledgementsSlider.classList.add('js-slide-2');
  } else if (acknowledgementsSlider.classList.contains('js-slide-4')) {
    acknowledgementsSlider.classList.remove('js-slide-4');
    acknowledgementsSlider.classList.add('js-slide-3');
  } else if (acknowledgementsSlider.classList.contains('js-slide-5')) {
    acknowledgementsSlider.classList.remove('js-slide-5');
    acknowledgementsSlider.classList.add('js-slide-4');
  } else if (acknowledgementsSlider.classList.contains('js-slide-6')) {
    acknowledgementsSlider.classList.remove('js-slide-6');
    acknowledgementsSlider.classList.add('js-slide-5');
  } else if (acknowledgementsSlider.classList.contains('js-slide-7')) {
    acknowledgementsSlider.classList.remove('js-slide-7');
    acknowledgementsSlider.classList.add('js-slide-6');
    acknowledgementsControlNext.classList.remove('is-disabled');
  }
});
