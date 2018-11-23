$(document).ready(function() {
  $('.history__slider').slick({
    accessibility: true,
    centerMode: true,
    centerPadding: 0,
    infinite: false,
    initialSlide: 2,
    mobileFirst: true,
    prevArrow: $('.history__slider-control--previous'),
    nextArrow: $('.history__slider-control--next'),
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
