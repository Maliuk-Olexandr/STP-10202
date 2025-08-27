import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper2 = new Swiper('#quests-swiper', {
  effect: 'coverflow',
  modules: [Navigation, EffectCoverflow],
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 272,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 1,
  },
  navigation: {
    nextEl: '#qr-btn-next',
    prevEl: '#qr-btn-prev',
  },
  breakpoints: {
    1200: {
      coverflowEffect: {
        rotate: 0,
        stretch: 355,
        depth: 50,
        modifier: 2,
        slideShadows: false,
        scale: 1,
      },
    },
  },
});
