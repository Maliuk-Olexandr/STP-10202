const refs = {
  mobMenu: document.querySelector('[data-menu]'),
  openBtn: document.querySelector('[data-action="open"]'),
  closeBtn: document.querySelector('[data-action="close"]'),
  body: document.body,
};

let isAnimationInProgress = false;

const toggleMobMenu = open => {
  if (isAnimationInProgress) return;

  isAnimationInProgress = true;
  refs.mobMenu.dataset.visible = open ? 'open' : 'close';
  refs.body.dataset.scroll = open ? 'lock' : 'allow';

  const onTransitionEnd = event => {
    if (event.target === refs.mobMenu) {
      isAnimationInProgress = false;
      refs.mobMenu.removeEventListener('transitionend', onTransitionEnd);
    }
  };

  refs.mobMenu.addEventListener('transitionend', onTransitionEnd);
};

refs.openBtn.addEventListener('click', () => toggleMobMenu(true));
refs.closeBtn.addEventListener('click', () => toggleMobMenu(false));

refs.mobMenu.addEventListener('click', e => {
  if (e.target.matches('.mobile-link')) {
    toggleMobMenu(false);
  }
});
