const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  closeMenuLink: document.querySelectorAll('.js-header-link'),
};
window.addEventListener('resize', checkWidth);
document.addEventListener('DOMContentLoaded', checkWidth);
function addListeners() {
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.forEach(item =>
    item.addEventListener('click', toggleMenu)
  );
}

function removeListeners() {
  refs.openMenuBtn.removeEventListener('click', toggleMenu);
  refs.closeMenuBtn.removeEventListener('click', toggleMenu);
  refs.closeMenuLink.forEach(item =>
    item.removeEventListener('click', toggleMenu)
  );
}
function checkWidth() {
  if (window.innerWidth <= 1200) {
    addListeners();
  } else {
    removeListeners();
  }
}

function toggleMenu() {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');

  if (refs.mobileMenu.classList.contains('is-open')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

refs.closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
