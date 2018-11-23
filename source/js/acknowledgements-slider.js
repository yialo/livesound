$(document).ready(function() {
  $('.acknowledgements__slider').slick({
    accessibility: true,
    centerMode: true,
    mobileFirst: true,
    prevArrow: $('.acknowledgements__slider-control--previous'),
    nextArrow: $('.acknowledgements__slider-control--next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });
});
