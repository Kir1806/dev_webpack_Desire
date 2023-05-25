import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
import 'swiper/css';
import '../../../node_modules/swiper/swiper-bundle.min.css';
// Swiper.use([Pagination]);

const topSwiper = new Swiper('.top-swiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.top-swiper-pagination',
        type: 'bullets',
    },
});

const contactSwiper = new Swiper('.contact-swiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    spaceBetween: 10, 
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.contact-swiper-pagination',
        type: 'bullets',
    },
});

const articleSwiper = new Swiper('.article-swiper', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

});

export {topSwiper, contactSwiper, articleSwiper};