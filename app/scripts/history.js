/* eslint-disable */

(function($) {
  $.fn.cascadeSlider = function (opt) {
    const $this = this;
    const itemClass = 'cascade-slider__item';
    const arrowClass = 'cascade-slider__arrow';
    const $items = $this.find(`.${itemClass}`);
    const $arrows = $this.find(`.${arrowClass}`);
    const itemCount = $items.length;

    const defaultIndex = 2;

    changeIndex(defaultIndex);

    $arrows.on('click', function () {
      const action = $(this).data('action');
      const nowIndex = $items.index($this.find('.now'));

      if (action === 'next') {
        if (nowIndex === itemCount - 1) {
          changeIndex(0);
        } else {
          changeIndex(nowIndex + 1);
        }
      } else if (action === 'prev') {
        if (nowIndex === 0) {
          changeIndex(itemCount - 1);
        } else {
          changeIndex(nowIndex - 1);
        }
      }
    });

    // add data attributes
    for (let i = 0; i < itemCount; i += 1) {
      $('.cascade-slider__item').each(function (i) {
        $(this).attr('data-slide-number', i);
      });
    }

    function changeIndex(nowIndex) {
      // clean all classes
      $this.find('.prev-prev').removeClass('prev-prev');
      $this.find('.prev').removeClass('prev');
      $this.find('.next-next').removeClass('next-next');
      $this.find('.next').removeClass('next');
      $this.find('.now').removeClass('now');

      if (nowIndex === 0) {
        $items.eq(itemCount - 1).addClass('prev');
        $items.eq(itemCount - 2).addClass('prev-prev');
      }
      if (nowIndex === 1) {
        $items.eq(0).addClass('prev');
        $items.eq(itemCount - 1).addClass('prev-prev');
      }
      if (nowIndex === itemCount - 2){
        $items.eq(0).addClass('next-next');
        $items.eq(itemCount - 1).addClass('next');
      }
      if (nowIndex === itemCount - 1){
        $items.eq(0).addClass('next');
        $items.eq(1).addClass('next-next');
      }

      $items.each(function (index) {
        if (index === nowIndex) {
          $items.eq(index).addClass('now');
        }
        if (index === nowIndex - 2) {
          $items.eq(index).addClass('prev-prev');
        }
        if (index === nowIndex - 1) {
          $items.eq(index).addClass('prev');
        }
        if (index === nowIndex + 2) {
          $items.eq(index).addClass('next-next');
        }
        if (index === nowIndex + 1) {
          $items.eq(index).addClass('next');
        }
      });
    }
  };
})(jQuery);

$('#cascade-slider').cascadeSlider();
