
import SmoothScroll from 'smoothscroll-for-websites';
import $ from 'jquery';

const parallax = {
  init() {

    SmoothScroll({ stepSize: 20, arrowScroll: 100, });

    $('.main__down').on('click', function (e) {
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $('#about').offset().top - 150
      }, 1000);
    })


    const classes = [
      { class: 'p-5', size: 10, },
      { class: 'p-4', size: 8, },
      { class: 'p-3', size: 6, },
      { class: 'p-2', size: 5, },
      { class: 'p-1', size: 4, },
      { class: 'p-0-1', size: 4, },
      { class: 'p-0-2', size: 6, },
      { class: 'p-0-3', size: 8, },
    ];



    function parallaxDesktop(elem, elemTop, windowTop) {

      classes.forEach((item) => {
        if ($(window).width() > 980) {
          if (elem.hasClass(item.class)) {
            if (elem.hasClass('p-0-1') || elem.hasClass('p-0-2') || elem.hasClass('p-0-3')) {
              elem.css({
                'transform': `translateY(${0 - (windowTop / item.size)}px)`
              });
            } else {
              elem.css({
                'transform': `translate3d(0,${(elemTop / item.size) - (windowTop / item.size)}px, 0px)`
              });
            }
          }
        } else {
          if (elem.hasClass('--parrlax-mobile')) {
            elem.css({
              'transform': `translate3d(0,${(elemTop / 8) - (windowTop / 8)}px, 0px)`
            });
          }
        }

      })
    }


    $(window).on('load', function () {
      let windowTop = $(window).scrollTop();

      $('.parallax').each(function () {
        const elemTop = $(this).offset().top;
        parallaxDesktop($(this), elemTop, windowTop);
      })

      $(window).on('scroll', function () {
        windowTop = $(window).scrollTop();
        $('.parallax').each(function () {
          const elemTop = $(this).offset().top;
          parallaxDesktop($(this), elemTop, windowTop);
        })
      })
    })

    // window.onload = () => {
    //   const parallaxItems = [].slice.call(document.querySelectorAll('.parallax'));
    //   parallaxItems.forEach((elem) => {
    //     const elemTop = elem.getBoundingClientRect().top;
    //     document.addEventListener('scroll', () => {
    //       if (document.body.clientWidth > 1200) {
    //         if (elem.classList.contains('p-5')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 10) - (window.pageYOffset / 10)}px, 0px)`;
    //         }
    //         else if (elem.classList.contains('p-4')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 8) - (window.pageYOffset / 8)}px, 0px)`;
    //         }
    //         else if (elem.classList.contains('p-3')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 6) - (window.pageYOffset / 6)}px, 0px)`;
    //         }
    //         else if (elem.classList.contains('p-2')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 4) - (window.pageYOffset / 4)}px, 0px)`;
    //         }
    //         else if (elem.classList.contains('p-1')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 3) - (window.pageYOffset / 3)}px, 0px)`;
    //         }
    //         else if (elem.classList.contains('p-0-1')) {
    //           elem.style.transform = `translateY(${0 - (window.pageYOffset / 4)}px)`;
    //         }
    //         else if (elem.classList.contains('p-0-2')) {
    //           elem.style.transform = `translateY(${0 - (window.pageYOffset / 6)}px)`;
    //         }
    //       } else {
    //         if (elem.classList.contains('--parrlax-mobile')) {
    //           elem.style.transform = `translate3d(0,${(elemTop / 8) - (window.pageYOffset / 8)}px, 0px)`;
    //         }
    //       }

    //     });
    //   })

    // }

  }
}


export default parallax;