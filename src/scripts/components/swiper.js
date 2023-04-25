import Swiper, { Pagination } from "swiper";
import 'swiper/css';
import '../../../node_modules/swiper/swiper-bundle.min.css';
// Swiper.use([Pagination]);

const topSwiper = new Swiper('.top-swiper', {
    modules: [Pagination],
    loop: true,
    pagination: {
        el: '.top-swiper-pagination',
        type: 'bullets',
    },
});

export {topSwiper};