import Swiper from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules";


const swiper = new Swiper(".swiper", {
  modules: [Navigation, EffectCoverflow],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: "#quests-button-next",
    prevEl: "#quests-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
});