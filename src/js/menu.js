import menuData from '../menu.json';
import menuTempl from '../templates/menu.hbs';

const menuHtml = menuTempl(menuData);
const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', menuHtml);
