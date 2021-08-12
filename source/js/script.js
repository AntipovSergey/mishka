const burger = document.querySelector('.main-header__burger');
const closeButton = document.querySelector('.main-header__close');
const siteMenu = document.querySelector('.site-navigation');
const userMenu = document.querySelector('.user-navigation');
const mainNav = document.querySelector('.main-header__nav');

mainNav.classList.remove('main-header__nav--nojs');
siteMenu.classList.remove('main-header__nav--nojs');
userMenu.classList.remove('main-header__nav--nojs');

burger.addEventListener('click', () => {
  siteMenu.classList.remove('site-navigation--hidden');
  userMenu.classList.remove('user-navigation--hidden');
  burger.classList.add('main-header__burger--hidden');
  closeButton.classList.remove('main-header__close--hidden');
})

closeButton.addEventListener('click', () => {
  siteMenu.classList.add('site-navigation--hidden');
  userMenu.classList.add('user-navigation--hidden');
  burger.classList.remove('main-header__burger--hidden');
  closeButton.classList.add('main-header__close--hidden');
})
