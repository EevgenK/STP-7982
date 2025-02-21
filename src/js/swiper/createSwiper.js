import Swiper from 'swiper';
import {
  Autoplay,
  Grid,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/modules';
('swiper');
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/grid';

const swiperReviews = new Swiper('.swiperReviews', {
  modules: [Navigation, Autoplay, EffectCoverflow],
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',

  speed: 250,
  grabCursor: true,
  spaceBetween: 24,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.reviews-btn.swiper-button-next',
    prevEl: '.reviews-btn.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      autoplay: false,
    },
    1200: {
      slidesPerView: 3,
      speed: 700,
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: false,
      },

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
  },
});
const swiperGallery = new Swiper('.swiperGallery', {
  modules: [Navigation, Pagination],
  speed: 250,
  spaceBetween: 30,
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
let resizeTimeout;
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
initSwiper();
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initSwiper();
  }, 300);
});
