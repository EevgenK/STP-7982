const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  closeMenuLink: document.querySelectorAll('.header-link'),
  playMarketImage: document.querySelector('.google-image'),
};

function toggleMenu() {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');

  if (refs.mobileMenu.classList.contains('is-open')) {
    document.body.classList.add('no-scroll');
    refs.playMarketImage.classList.remove('google-image');
  } else {
    document.body.classList.remove('no-scroll');
    refs.playMarketImage.classList.add('google-image');
  }
}

refs.closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
