var
  modalContainer = document.querySelector('.modal'),
  modalCloseButton_1 = modalContainer.querySelector('.modal__close-button--1'),
  modalCloseButton_2 = modalContainer.querySelector('.modal__close-button--2'),
  modalCloseButton_3 = modalContainer.querySelector('.modal__close-button--3'),
  modalCloseButton_4 = modalContainer.querySelector('.modal__close-button--4'),
  modalCloseButton_5 = modalContainer.querySelector('.modal__close-button--5'),
  modalCloseButton_6 = modalContainer.querySelector('.modal__close-button--6'),
  modalCloseButton_7 = modalContainer.querySelector('.modal__close-button--7'),
  acknowledge_1 = document.querySelector('.acknowledgements__link--1'),
  acknowledge_2 = document.querySelector('.acknowledgements__link--2'),
  acknowledge_3 = document.querySelector('.acknowledgements__link--3'),
  acknowledge_4 = document.querySelector('.acknowledgements__link--4'),
  acknowledge_5 = document.querySelector('.acknowledgements__link--5'),
  acknowledge_6 = document.querySelector('.acknowledgements__link--6'),
  acknowledge_7 = document.querySelector('.acknowledgements__link--7');

acknowledge_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--1');
});

modalCloseButton_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--1');
});

acknowledge_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--2');
});

modalCloseButton_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--2');
});

acknowledge_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--3');
});

modalCloseButton_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--3');
});

acknowledge_4.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--4');
});

modalCloseButton_4.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--4');
});

acknowledge_5.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--5');
});

modalCloseButton_5.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--5');
});

acknowledge_6.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--6');
});

modalCloseButton_6.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--6');
});

acknowledge_7.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.add('js-show-modal');
  modalContainer.classList.add('js-show-modal--7');
});

modalCloseButton_7.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContainer.classList.remove('js-show-modal');
  modalContainer.classList.remove('js-show-modal--7');
});
