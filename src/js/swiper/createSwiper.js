import Swiper from 'swiper';
import {
  Grid,
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectFlip,
} from 'swiper/modules';
('swiper');
import { debounce } from '../utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/grid';
import 'swiper/scss/effect-flip';
import 'swiper/scss/effect-coverflow';

const swiperReviews = new Swiper('.swiperReviews', {
  modules: [Navigation, EffectCoverflow],
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  speed: 250,
  grabCursor: true,
  spaceBetween: 24,

  navigation: {
    nextEl: '.reviews-btn.swiper-button-next',
    prevEl: '.reviews-btn.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: false,
      coverflowEffect: { depth: 0, slideShadows: false },
    },
    1200: {
      slidesPerView: 3,
      speed: 850,
      loop: true,
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: false,
      },
    },
  },
});
const swiperGallery = new Swiper('.swiperGallery', {
  modules: [Navigation, Pagination, EffectFlip],
  effect: 'flip',
  speed: 850,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.gallery-btn.swiper-button-next',
    prevEl: '.gallery-btn.swiper-button-prev',
  },
});
let swiperBenefits;

const initSwiper = () => {
  if (window.innerWidth < 1200) {
    if (!swiperBenefits) {
      swiperBenefits = new Swiper('.swiperBenefits', {
        modules: [Grid, Navigation],
        spaceBetween: 12,
        speed: 250,
        slidesPerView: 1,
        grabCursor: true,
        grid: {
          rows: 2,
          fill: 'row',
        },
        navigation: {
          nextEl: '.benefits-btn.swiper-button-next',
          prevEl: '.benefits-btn.swiper-button-prev',
        },
      });
    }
  } else {
    if (swiperBenefits) {
      swiperBenefits.destroy(true, true);
      swiperBenefits = null;
    }
  }
};

window.addEventListener('resize', debounce(initSwiper, 300));
