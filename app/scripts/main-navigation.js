'use strict';

const mainMenu = document.querySelector('.page-header__popup');
const mainMenuButtonOpen = document.querySelector('.menu-controls__button--open');
const mainMenuButtonClose = document.querySelector('.menu-controls__button--close');

const menuVisibilityToggle = function toggleNavigationMenuVisibility(button) {
  mainMenu.classList.toggle('is-visible');
  mainMenuButtonOpen.classList.toggle('is-visible');
  mainMenuButtonClose.classList.toggle('is-visible');
  button.focus();
};

mainMenuButtonOpen.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuVisibilityToggle(mainMenuButtonClose);
});

mainMenuButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuVisibilityToggle(mainMenuButtonOpen);
});

window.addEventListener('keydown', (evt) => {
  if ((evt.keyCode === 27) && (mainMenu.classList.contains('is-visible'))) {
    evt.preventDefault();
    menuVisibilityToggle(mainMenuButtonOpen);
  }
});
