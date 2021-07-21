import $ from 'jquery';

const header = {
  init() {
    function headerBG(scrollTop) {
      if (scrollTop > 10) {
        $('.header__background').addClass('active');
      } else {
        $('.header__background').removeClass('active');
      }
    }
    $(document).on('ready', function () {
      var scrollTop = $(window).scrollTop();
      headerBG(scrollTop)
    })
    $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop();
      headerBG(scrollTop)
    })
  }
}


export default header;