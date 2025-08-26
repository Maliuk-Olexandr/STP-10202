document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const popup = document.querySelector('#cookies-popup');
    const acceptBtn = document.querySelector('#accept-cookies');
    const declineBtn = document.querySelector('#decline-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
      popup.classList.add('show');

      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        popup.classList.remove('show');
      });
      declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        popup.classList.remove('show');
      });
    }
  }, 7000);
});
