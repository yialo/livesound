'use strict';

const pageHeader = document.querySelector('.page-header');
const mainMenuButtonOpener = pageHeader.querySelector('.menu-controls__button--open');
const mainMenuButtonCloser = pageHeader.querySelector('.menu-controls__button--close');

const menuVisibilityToggle = function toggleNavigationMenuVisibility(button) {
  pageHeader.classList.toggle('is-visible');
  button.focus();
};

const showMenu = function showMainMenu() {
  menuVisibilityToggle(mainMenuButtonCloser);
};

const hideMenu = function showMainMenu() {
  menuVisibilityToggle(mainMenuButtonOpener);
};

mainMenuButtonOpener.addEventListener('click', () => {
  showMenu();
});

mainMenuButtonCloser.addEventListener('click', () => {
  hideMenu();
});

window.addEventListener('keydown', (evt) => {
  if ((evt.keyCode === 27) && (pageHeader.classList.contains('is-visible'))) {
    evt.preventDefault();
    hideMenu();
  }
});
