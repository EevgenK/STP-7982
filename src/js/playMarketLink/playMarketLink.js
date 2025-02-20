document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.play-market-link');
  if (element) {
    const clone = element.cloneNode(true);
    document.querySelector('.choose-container').appendChild(clone);
  }
});
