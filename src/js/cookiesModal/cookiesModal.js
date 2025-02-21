const refs = {
  cookiesModal: document.querySelector('.cookies-section'),
  acceptBtn: document.getElementById('accept-cookies'),
  declineBtn: document.getElementById('decline-cookies'),
};
const agreement = localStorage.getItem('cookiesAgreement');
if (!agreement) {
  setTimeout(() => {
    refs.cookiesModal.style.display = 'block';
    console.log('There is no any Agreement');
  }, 1500);
} else {
  console.log(`Already exist Agreement: "${agreement}"`);
}

const onButtonClick = e => {
  const { id } = e.target;

  switch (id) {
    case 'accept-cookies':
      localStorage.setItem('cookiesAgreement', 'accepted');
      break;
    case 'decline-cookies':
      localStorage.setItem('cookiesAgreement', 'declined');
    default:
      break;
  }
  refs.cookiesModal.style.display = 'none';
};

refs.acceptBtn.addEventListener('click', onButtonClick);
refs.declineBtn.addEventListener('click', onButtonClick);
