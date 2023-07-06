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
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
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

/*const getBigPictureDescription = (clonedTemplate) => {
  return clonedTemplate.querySelector('.picture__img').addEventListener('click', () => {
    document.querySelector('.big-picture__img img').src = url
    document.querySelector('.likes-count').textContent = likes
    document.querySelector('.comments-count').textContent = comments.length
    document.querySelector('.social__caption').textContent = description
  })
}

export {getBigPictureDescription}*/
