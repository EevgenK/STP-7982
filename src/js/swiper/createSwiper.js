import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
('swiper');
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/grid';

document.addEventListener('DOMContentLoaded', function () {
  let swiperBenefits, swiperGallery, swiper3;

  function initSwiper1() {
    if (window.innerWidth < 1200) {
      if (!swiperBenefits) {
        swiperBenefits = new Swiper('.swiperBenefits', {
          modules: [Grid, Navigation],
          speed: 250,
          slidesPerView: 1.25,
          grabCursor: true,
          grid: {
            rows: 1.5,
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
  }
  function initSwiper2() {
    if (!swiperGallery) {
      swiperGallery = new Swiper('.swiperGallery', {
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
    }
  }

  function handleResize() {
    initSwiper1();
    initSwiper2();
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});

// function initSwiper2() {
//   if (swiper2) swiper2.destroy(true, true);

//   swiper2 = new Swiper('.swiper-2', {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     pagination: {
//       el: '.swiper-pagination-2',
//       clickable: true,
//     },
//     centeredSlides: true,
//     slideActiveClass: 'swiper-slide-active',
//     on: {
//       slideChange: function () {
//         document
//           .querySelectorAll('.swiper-2 .swiper-slide')
//           .forEach(slide => {
//             slide.style.transform = 'scale(1)';
//           });
//         document.querySelector(
//           '.swiper-2 .swiper-slide-active'
//         ).style.transform = 'scale(1.1)';
//       },
//     },
//     autoplay: window.innerWidth < 1200 ? { delay: 2000 } : false,
//   });
// }

// initSwiper3();
