import Swiper, { Pagination, Autoplay } from "swiper";
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

export {topSwiper};