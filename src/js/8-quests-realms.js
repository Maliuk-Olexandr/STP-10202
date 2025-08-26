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
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 1,
  },
  breakpoints: {
    1200: {
      coverflowEffect: {
        rotate: 0,
        stretch: 150,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 1,
      },
    },
  },
});
