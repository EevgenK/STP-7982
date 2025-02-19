const swiper = new Swiper('.mySwiper', {
  pagination: {
    modules: [Swiper.Grid],
    slidesPerView: 1,
    // grid: {
    //   rows: 2,
    //   fill: 'row',
    // },
    // spaceBetween: 12,

    // el: '.swiper-pagination',
    // type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
