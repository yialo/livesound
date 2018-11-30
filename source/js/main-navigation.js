var mainMenu = document.querySelector('.page-header__navigation');
var mainMenuButtonOpen = document.querySelector('.menu-controls__button--open');
var mainMenuButtonClose = document.querySelector('.menu-controls__button--close');

var menuVisibilityToggle = function (button) {
  mainMenu.classList.toggle('is-visible');
  mainMenuButtonOpen.classList.toggle('is-visible');
  mainMenuButtonClose.classList.toggle('is-visible');
  button.focus();
}

mainMenuButtonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuVisibilityToggle(mainMenuButtonClose);
});

mainMenuButtonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuVisibilityToggle(mainMenuButtonOpen);
});

window.addEventListener('keydown', function(evt) {
  if ((evt.keyCode === 27) && (mainMenu.classList.contains('is-visible'))) {
      evt.preventDefault();
      menuVisibilityToggle(mainMenuButtonOpen);
  }
});
