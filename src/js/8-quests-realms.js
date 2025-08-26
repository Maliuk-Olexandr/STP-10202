import Swiper from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const swiper2 = new Swiper("#quests-swiper", {
  effect: "coverflow",
  modules: [Navigation, EffectCoverflow],
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 270,
    depth: 100,
    modifier: 1,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});