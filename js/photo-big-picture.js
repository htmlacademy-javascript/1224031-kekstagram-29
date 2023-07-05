import {isEscapeKey} from './utils.js';

const bigPictureSection = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures')
const bigPictureOpen = picturesContainer.querySelectorAll('.picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = () => {
    bigPictureSection.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
    bigPictureSection.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
};

bigPictureOpen.addEventListener('click', () => {
  openBigPicture();
});

bigPictureClose.addEventListener('click', () => {
  closeBigPicture();
});


