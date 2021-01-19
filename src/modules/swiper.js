import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const myswiper = new Swiper('.swiper-container', {

  // direction: 'horizontal',
  // simulateTouch: true,
  // allowSlideNext: true,
  // centerInsufficientSlides: true,
  // grabCursor: true,
  // initialSlide: 1,
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique',
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});

export default myswiper;
