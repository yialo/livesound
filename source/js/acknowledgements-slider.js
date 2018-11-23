$(document).ready(function() {
  $('.acknowledgements__slider').slick({
    accessibility: true,
    mobileFirst: true,
    prevArrow: $('.acknowledgements__slider-control--previous'),
    nextArrow: $('.acknowledgements__slider-control--next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });
});
