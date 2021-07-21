import $ from 'jquery';


const timeline = {
  init() {
    console.log('scroll')
    if ($(window).width() < 701) {
      $('.about-inner__timeline-wrap').on('scroll', function () {
        var blockHeight = $(this).innerHeight() / 1.5;
        var blockOffset = $(this).offset().top;
        $('.timeline__item').each(function () {
          var scrollTop = $(this).offset().top - blockOffset;
          if (!$(this).hasClass('mobile-visible')) {
            if (scrollTop < blockHeight) {
              $(this).find('.timeline__text, .timeline__pic').slideDown(600);
            }
          }
        })
      })
    }
  }
}


export default timeline;