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
 
  breakpoints: {
    320: {
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 1,
      },
    },
    1200: {
      spaceBetween: 100,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 1,
      },
    },
  },
});
