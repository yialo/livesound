var
  acknowledgementsControlPrevious = document.querySelector('.acknowledgements__slider-control--previous'),
  acknowledgementsControlNext = document.querySelector('.acknowledgements__slider-control--next'),acknowledgementsSlider = document.querySelector('.acknowledgements__list');

acknowledgementsControlNext.addEventListener('click', function() {
  if (acknowledgementsSlider.classList.contains('js-slide-1')) {
    acknowledgementsSlider.classList.remove('js-slide-1');
    acknowledgementsSlider.classList.add('js-slide-2');
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
  } else if (acknowledgementsSlider.classList.contains('js-slide-7')) {
    acknowledgementsSlider.classList.remove('js-slide-7');
    acknowledgementsSlider.classList.add('js-slide-1');
  }
});

acknowledgementsControlPrevious.addEventListener('click', function() {
  if (acknowledgementsSlider.classList.contains('js-slide-1')) {
    acknowledgementsSlider.classList.remove('js-slide-1');
    acknowledgementsSlider.classList.add('js-slide-7');
  } else if (acknowledgementsSlider.classList.contains('js-slide-2')) {
    acknowledgementsSlider.classList.remove('js-slide-2');
    acknowledgementsSlider.classList.add('js-slide-1');
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
  }
});
