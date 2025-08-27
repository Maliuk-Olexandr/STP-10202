
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

  const swiper = new Swiper('#how-to-play-swiper', {
    modules: [Navigation, Pagination],
    speed: 600,
    slidesPerView: 1,
    pagination: {
      el: '#how-to-play-pagination',
      type: 'progressbar',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    navigation: {
      nextEl: '#htp-next',
      prevEl: '#htp-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 78,
      },
    },
    loop: true,
  });
