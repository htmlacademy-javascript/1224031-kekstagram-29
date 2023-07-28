import {isEscapeKey} from './utils.js';

const photoUploadField = document.querySelector('.img-upload__input');
const photoUploadOverlay = document.querySelector('.img-upload__overlay');

const closeUploadOverlayButton = document.querySelector('.img-upload__cancel');


//Функция скрытия окна загрузки фотографии по клику
const closeUploadOverlay = () => {
  photoUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeUploadOverlayButton.removeEventListener('click', closeUploadOverlay);
  document.removeEventListener('keydown', closeUploadOverlayOnKeydown);
  photoUploadField.value = '';
}

//Функция скрытия окна загрузки фотографии по ESC
const closeUploadOverlayOnKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
    document.removeEventListener('keydown', closeUploadOverlayOnKeydown);
  }
}

//Вешаем слушатели и открываем модальное окно при загрузке фотографии
photoUploadField.onchange = function () {
  photoUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadOverlayOnKeydown);
  closeUploadOverlayButton.addEventListener('click', closeUploadOverlay);
};
