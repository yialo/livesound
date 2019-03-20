/* eslint-disable */

$(document).ready(function(){
  // var video = $('.promo-slide__video');
  var slider = $('.promo__list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: $('.slider-controls__inner'),
  });

  // video.on('ended', function() {
  //   console.log('I\'m done!');
  // });
});
