import $ from 'jquery';


const careerForm = {
  init() {
    $('.career .link-arrow').on('click', function (e) {
      e.preventDefault();
    });

    $('.next-step').on('click', function () {
      $(this).fadeOut(300);
      $(this).nextAll('.vacancies__form').fadeIn();
    });

    $('.form__close').on('click', function () {
      $(this).parent('.vacancies__form').fadeOut();
      $(this).parent('.vacancies__form').siblings('.next-step').fadeIn();
    });

    $('.vacancies__submit').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.vacancies__form').fadeOut();
      $(this).parents('.vacancies__form').nextAll('.vacancies__succes-message').fadeIn();
    })
  }
}


export default careerForm;