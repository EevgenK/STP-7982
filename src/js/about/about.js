const refs = {
  firstBox: document.querySelector('.js-about-box-first'),
  secondBox: document.querySelector('.js-about-box-second'),
  firstImage: document.querySelector('.js-first-image'),
  secondImage: document.querySelector('.js-second-image'),
};

window.addEventListener('resize', debounce(ReplaceImages, 100));
document.addEventListener('DOMContentLoaded', ReplaceImages);

function ReplaceImages() {
  if (window.innerWidth <= 1200) {
    restoreImagesForMobile();
  } else {
    swapImagesForDesktop();
  }
}

function swapImagesForDesktop() {
  if (refs.firstBox.contains(refs.firstImage)) {
    refs.firstBox.replaceChild(refs.secondImage, refs.firstImage);
    refs.secondBox.insertBefore(refs.firstImage, refs.secondBox.firstChild);
  }
}

function restoreImagesForMobile() {
  if (refs.firstBox.contains(refs.secondImage)) {
    refs.firstBox.replaceChild(refs.firstImage, refs.secondImage);
    refs.secondBox.insertBefore(refs.secondImage, null);
  }
}

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}
