var
  acknowledgementsControLPrevious = document.querySelector('.acknowledgements__slider-control--previous'),
  acknowledgementsControLNext = document.querySelector('.acknowledgements__slider-control--next'),acknowledgementsSlider = document.querySelector('.acknowledgements__list');

acknowledgementsControLNext.addEventListener('click', function() {
  acknowledgementsSlider.classList.remove('js-slide-1');
  acknowledgementsSlider.classList.add('js-slide-2');
});
