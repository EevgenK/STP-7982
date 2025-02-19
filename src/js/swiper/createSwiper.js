import Swiper from 'swiper';
import { Grid, Navigation } from 'swiper/modules';
('swiper');
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/grid';

const swiper = new Swiper('.mySwiper', {
  modules: [Grid, Navigation],
  slidesPerView: 1.25,
  grabCursor: true,
  grid: {
    rows: 1.5,
    fill: 'row',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
