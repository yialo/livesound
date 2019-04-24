/* eslint-disable */

$(document).ready(function(){
  var slider = $('.promo__list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: $('.slider-controls__inner'),
  });
});
