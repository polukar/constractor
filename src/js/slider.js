import Swiper from 'swiper/bundle';

const slider = {
  init() {
    const swiper = new Swiper('.slider .swiper-container', {
      loop: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
    new Swiper('.companies .swiper-container', {
      loop: true,
      speed: 4000,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 25
        },
      }
    });
  }
}


export default slider;