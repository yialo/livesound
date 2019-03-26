'use strict';

const body = document.querySelector('.page');
const modalContainer = document.querySelector('.modal');
const modalCloseButton1 = modalContainer.querySelector('.modal__close-button--1');
const modalCloseButton2 = modalContainer.querySelector('.modal__close-button--2');
const modalCloseButton3 = modalContainer.querySelector('.modal__close-button--3');
const modalCloseButton4 = modalContainer.querySelector('.modal__close-button--4');
const modalCloseButton5 = modalContainer.querySelector('.modal__close-button--5');
const modalCloseButton6 = modalContainer.querySelector('.modal__close-button--6');
const modalCloseButton7 = modalContainer.querySelector('.modal__close-button--7');
const overlay = modalContainer.querySelector('.modal__overlay');
const acknowledge1 = document.querySelector('.acknowledgements__link--1');
const acknowledge2 = document.querySelector('.acknowledgements__link--2');
const acknowledge3 = document.querySelector('.acknowledgements__link--3');
const acknowledge4 = document.querySelector('.acknowledgements__link--4');
const acknowledge5 = document.querySelector('.acknowledgements__link--5');
const acknowledge6 = document.querySelector('.acknowledgements__link--6');
const acknowledge7 = document.querySelector('.acknowledgements__link--7');

acknowledge1.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--1');
});

modalCloseButton1.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--1');
});

acknowledge2.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--2');
});

modalCloseButton2.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--2');
});

acknowledge3.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--3');
});

modalCloseButton3.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--3');
});

acknowledge4.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--4');
});

modalCloseButton4.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--4');
});

acknowledge5.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--5');
});

modalCloseButton5.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--5');
});

acknowledge6.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--6');
});

modalCloseButton6.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--6');
});

acknowledge7.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--7');
});

modalCloseButton7.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--7');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 && modalContainer.classList.contains('js-show-modal')) {
    evt.preventDefault();
    body.classList.remove('js-show-modal');
    modalContainer.classList.remove('js-show-modal');
    modalContainer.classList.remove('js-show-modal--1');
    modalContainer.classList.remove('js-show-modal--2');
    modalContainer.classList.remove('js-show-modal--3');
    modalContainer.classList.remove('js-show-modal--4');
    modalContainer.classList.remove('js-show-modal--5');
    modalContainer.classList.remove('js-show-modal--6');
    modalContainer.classList.remove('js-show-modal--7');
  }
});

overlay.addEventListener('click', () => {
  if (modalContainer.classList.contains('js-show-modal')) {
    body.classList.remove('js-show-modal');
    modalContainer.classList.remove('js-show-modal');
    modalContainer.classList.remove('js-show-modal--1');
    modalContainer.classList.remove('js-show-modal--2');
    modalContainer.classList.remove('js-show-modal--3');
    modalContainer.classList.remove('js-show-modal--4');
    modalContainer.classList.remove('js-show-modal--5');
    modalContainer.classList.remove('js-show-modal--6');
    modalContainer.classList.remove('js-show-modal--7');
  }
});
