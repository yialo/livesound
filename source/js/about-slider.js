var historySlider = document.querySelector('.history__inner');
var sliderButtonPrevious = historySlider.querySelector('.history__control-button--previous');
var sliderButtonNext = historySlider.querySelector('.history__control-button--next');
var historyDateButton_1 = historySlider.querySelector('.history__date-button--1');
var historyDateButton_2 = historySlider.querySelector('.history__date-button--2');
var historyDateButton_3 = historySlider.querySelector('.history__date-button--3');
var historyDateButton_4 = historySlider.querySelector('.history__date-button--4');
var historyDateButton_5 = historySlider.querySelector('.history__date-button--5');

sliderButtonPrevious.addEventListener('click', function() {
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

sliderButtonNext.addEventListener('click', function() {
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

historyDateButton_1.addEventListener('click', function() {
  historySlider.classList.add('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton_2.addEventListener('click', function() {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.add('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton_3.addEventListener('click', function() {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.add('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton_4.addEventListener('click', function() {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.add('js-slide-4');
  historySlider.classList.remove('js-slide-5');
});

historyDateButton_5.addEventListener('click', function() {
  historySlider.classList.remove('js-slide-1');
  historySlider.classList.remove('js-slide-2');
  historySlider.classList.remove('js-slide-3');
  historySlider.classList.remove('js-slide-4');
  historySlider.classList.add('js-slide-5');
});
