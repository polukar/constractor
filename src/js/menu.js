
import $ from 'jquery';
const menu = {
  init() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
      if (!burger.classList.contains('active')) {
        burger.classList.remove('notactive');
        burger.classList.add('active');
        $('.nav').fadeOut();
        $('.menu').fadeIn();
        $('.header__start').addClass('header-open');
        $('.header__end').addClass('header-open');
        document.body.style.overflow = 'hidden';
      } else {
        burger.classList.remove('active');
        burger.classList.add('notactive');
        $('.nav').fadeIn();
        $('.menu').fadeOut();
        $('.header__start').removeClass('header-open');
        $('.header__end').removeClass('header-open');
        document.body.style.overflow = 'visible';
      }
    })
  }
}


export default menu;