
import $ from 'jquery';

const share = {
  init() {
    $('.share').on('click', function () {
      $('.share-popup').fadeIn();
      $('body').css({
        'overflow': 'hidden'
      });
    });
    $('.share__close').on('click', function () {
      $('.share-popup').fadeOut();
      $('.share__button').removeClass('checked');
      $('body').css({
        'overflow': 'visible'
      });
    });
    $('.share__button').on('click', function () {
      $(this).addClass('checked');
    });

    const shareButton = document.querySelector('.share__button');
    const shareInput = document.querySelector('.share__input');
    shareButton.addEventListener('click', () => {
      shareInput.select();
      shareButton.querySelector('span').innerHTML = 'Link copied'
      document.execCommand("copy");
    })

  }
}


export default share;