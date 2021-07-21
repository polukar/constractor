import $ from 'jquery';


const accardeon = {
  init() {
    $('.accardeon__main').on('click', function () {
      $('.accardeon__down').slideUp(700);
      $('.accardeon__main').removeClass('active');
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).nextAll('.accardeon__down').slideDown(700);
      } else {
        $(this).removeClass('active');
        $(this).nextAll('.accardeon__down').slideUp(700);
      }
    })
  }
}


export default accardeon;