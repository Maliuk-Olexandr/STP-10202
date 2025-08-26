import Swiper from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules"; // 

const swiper = new Swiper("#quests-swiper", {
  modules: [Navigation, EffectCoverflow], 
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});