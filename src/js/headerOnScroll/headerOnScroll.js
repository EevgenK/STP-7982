document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 190) {
      header.classList.add('header-on-scroll');
    } else {
      header.classList.remove('header-on-scroll');
    }
  });
});
