import $ from 'jquery';

const search = {
  init() {
    $('.filter-search__btn').on('click', function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).parents('.companies-main__list').addClass('active');
        $(this).siblings('.filter-search').fadeIn(400);
      } else {
        $(this).removeClass('active');
        $(this).parents('.companies-main__list').removeClass('active');
        $(this).siblings('.filter-search').fadeOut(200);
      }
    })
  }
}


export default search;