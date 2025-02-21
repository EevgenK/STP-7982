const refs = {
  cookiesModal: document.querySelector('.cookies-section'),
  acceptBtn: document.getElementById('accept-cookies'),
  declineBtn: document.getElementById('decline-cookies'),
};

const onButtonClick = e => {
  const { id } = e.target;
  console.log(id);
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
