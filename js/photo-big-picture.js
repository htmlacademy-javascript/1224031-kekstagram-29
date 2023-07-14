import {isEscapeKey} from './utils.js';

//Ищем необходимые классы
const bigPictureSection = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const bigPictureOpen = picturesContainer.querySelectorAll('.picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

//Функция скрытия окна показа фотографии
const closeBigPicture = () => {
  bigPictureSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

//Функция скрытия окна при нажатии ESC
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

//Функция открытия окна показа фотографии
const openBigPicture = () => {
  bigPictureSection.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};


//Вешаем слушатели

bigPictureOpen.forEach((i) =>
  i.addEventListener('click', () => {
    openBigPicture();
  }));


bigPictureClose.addEventListener('click', () => {
  closeBigPicture();
});
