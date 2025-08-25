document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('#cookies-popup');
  const acceptBtn = document.querySelector('#accept-cookies');
  const declineBtn = document.querySelector('#decline-cookies');

  // Перевіряємо чи вже прийняті cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    popup.style.display = 'flex'; // показуємо попап
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true'); // зберігаємо стан
    popup.style.display = 'none'; // ховаємо попап
  });
  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false'); // зберігаємо стан
    popup.style.display = 'none'; // ховаємо попап
  });
});
