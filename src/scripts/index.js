import "../pages/index.css";

import { topSwiper }from './components/swiper';

const headerButton = document.querySelector('.header__button');
const rightsideMenu = document.querySelector('.rightside-menu');
const rightsideMenuClose = document.querySelector('.rightside-menu--close');

headerButton.addEventListener('click', () => {
    rightsideMenu.classList.remove('rightside-menu--close');
});

rightsideMenuClose.addEventListener('click', () => {
    rightsideMenu.classList.add('rightside-menu--close');
});

console.log("Сборка работает!!!!")