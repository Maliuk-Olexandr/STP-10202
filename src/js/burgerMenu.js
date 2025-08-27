const refs = {
  mobMenu: document.querySelector('[data-menu]'),
  burgerBtn: document.querySelector('[data-action="toggle"]'),
  burgerIcon: document.querySelector('[data-burger]'),
  closeIcon: document.querySelector('[data-close]'),
  body: document.body,
};

let isAnimationInProgress = false;

const toggleMobMenu = open => {
  if (isAnimationInProgress) return;

  isAnimationInProgress = true;

  // Відкриття / закриття меню
  refs.mobMenu.dataset.visible = open ? 'open' : 'close';
  refs.body.dataset.scroll = open ? 'lock' : 'allow';

  // Зміна іконки
  refs.burgerIcon.style.display = open ? 'none' : 'block';
  refs.closeIcon.style.display = open ? 'block' : 'none';

  const onTransitionEnd = event => {
    if (event.target === refs.mobMenu) {
      isAnimationInProgress = false;
      refs.mobMenu.removeEventListener('transitionend', onTransitionEnd);
    }
  };

  refs.mobMenu.addEventListener('transitionend', onTransitionEnd);
};

// Клік по кнопці бургер/хрестик
refs.burgerBtn.addEventListener('click', () => {
  const isOpen = refs.mobMenu.dataset.visible === 'open';
  toggleMobMenu(!isOpen);
});

// Закриття по кліку на посилання або на фон
refs.mobMenu.addEventListener('click', e => {
  if (e.target.matches('.js-mobile-link') || e.target === refs.mobMenu) {
    toggleMobMenu(false);
  }
});
