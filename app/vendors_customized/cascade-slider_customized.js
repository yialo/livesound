/* eslint-disable */

(function($) {
  $.fn.cascadeSlider = function(opt) {
    var $this = this,
      itemClass = opt.itemClass || 'cascade-slider__item',
      arrowClass = opt.arrowClass || 'cascade-slider__arrow',
      $item = $this.find('.' + itemClass),
      $arrow = $this.find('.' + arrowClass),
      itemCount = $item.length;

    var defaultIndex = 0;

    changeIndex(defaultIndex);

    $arrow.on('click', function() {
      var action = $(this).data('action'),
        nowIndex = $item.index($this.find('.now'));

      if(action == 'next') {
        if(nowIndex == itemCount - 1) {
          changeIndex(0);
        } else {
          changeIndex(nowIndex + 1);
        }
      } else if (action == 'prev') {
        if(nowIndex == 0) {
          changeIndex(itemCount - 1);
        } else {
          changeIndex(nowIndex - 1);
        }
      }

      $('.cascade-slider__dot').removeClass('cur');
      //$('.cascade-slider__dot').next().addClass('cur');
    });

    // add data attributes
    for (var i = 0; i < itemCount; i++) {
      $('.cascade-slider__item').each(function(i) {
        $(this).attr('data-slide-number', [i]);
      });
    }

    // dots
    $('.cascade-slider__dot').bind('click', function(){
      // add class to current dot on click
      $('.cascade-slider__dot').removeClass('cur');
      $(this).addClass('cur');

      var index = $(this).index();

      $('.cascade-slider__item').removeClass('now prev next');
      var slide = $('.cascade-slider__slides').find('[data-slide-number=' + index + ']');
      slide.prev().addClass('prev');
      slide.addClass('now');
      slide.next().addClass('next');

      if(slide.next().length == 0) {
        $('.cascade-slider__item:first-child').addClass('next');
      }

      if(slide.prev().length == 0) {
        $('.cascade-slider__item:last-child').addClass('prev');
      }
    });

    function changeIndex(nowIndex) {
      // clern all class
      $this.find('.now').removeClass('now');
      $this.find('.next').removeClass('next');
      $this.find('.prev').removeClass('prev');
      if(nowIndex == itemCount -1){
        $item.eq(0).addClass('next');
      }
      if(nowIndex == 0) {
        $item.eq(itemCount -1).addClass('prev');
      }

      $item.each(function(index) {
        if(index == nowIndex) {
          $item.eq(index).addClass('now');
        }
        if(index == nowIndex + 1 ) {
          $item.eq(index).addClass('next');
        }
        if(index == nowIndex - 1 ) {
          $item.eq(index).addClass('prev');
        }
      });
    }
  };
})(jQuery);
