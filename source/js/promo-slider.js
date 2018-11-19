var promoSlider = document.querySelector('.promo__list');
var sliderControlButton_1 = document.querySelector('.slider-controls__button--1');
var sliderControlButton_2 = document.querySelector('.slider-controls__button--2');
var sliderControlButton_3 = document.querySelector('.slider-controls__button--3');
var sliderControlButton_4 = document.querySelector('.slider-controls__button--4');

sliderControlButton_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderControlButton_1.classList.contains('is-current')) {
    promoSlider.classList.add('js-slide-1');
    promoSlider.classList.remove('js-slide-2');
    promoSlider.classList.remove('js-slide-3');
    promoSlider.classList.remove('js-slide-4');
    sliderControlButton_1.classList.add('is-current');
    sliderControlButton_2.classList.remove('is-current');
    sliderControlButton_3.classList.remove('is-current');
    sliderControlButton_4.classList.remove('is-current');
  }
});

sliderControlButton_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderControlButton_2.classList.contains('is-current')) {
    promoSlider.classList.remove('js-slide-1');
    promoSlider.classList.add('js-slide-2');
    promoSlider.classList.remove('js-slide-3');
    promoSlider.classList.remove('js-slide-4');
    sliderControlButton_1.classList.remove('is-current');
    sliderControlButton_2.classList.add('is-current');
    sliderControlButton_3.classList.remove('is-current');
    sliderControlButton_4.classList.remove('is-current');
  }
});

sliderControlButton_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderControlButton_3.classList.contains('is-current')) {
    promoSlider.classList.remove('js-slide-1');
    promoSlider.classList.remove('js-slide-2');
    promoSlider.classList.add('js-slide-3');
    promoSlider.classList.remove('js-slide-4');
    sliderControlButton_1.classList.remove('is-current');
    sliderControlButton_2.classList.remove('is-current');
    sliderControlButton_3.classList.add('is-current');
    sliderControlButton_4.classList.remove('is-current');
  }
});

sliderControlButton_4.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderControlButton_4.classList.contains('is-current')) {
    promoSlider.classList.remove('js-slide-1');
    promoSlider.classList.remove('js-slide-2');
    promoSlider.classList.remove('js-slide-3');
    promoSlider.classList.add('js-slide-4');
    sliderControlButton_1.classList.remove('is-current');
    sliderControlButton_2.classList.remove('is-current');
    sliderControlButton_3.classList.remove('is-current');
    sliderControlButton_4.classList.add('is-current');
  }
});
