import {isEscapeKey} from './utils.js';
import {resetEffects} from "./photo-effects.js";
import {resetScale} from "./photo-scale.js";

const photoUploadForm = document.querySelector('.img-upload__form');
const photoUploadField = document.querySelector('.img-upload__input');
const photoUploadOverlay = document.querySelector('.img-upload__overlay');

const closeUploadOverlayButton = document.querySelector('.img-upload__cancel');

const hashtagInputField = document.querySelector('.text__hashtags');

const MAX_HASHTAG_COUNT = 5;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const HASHTAG_REGULAR_VALIDATE = /^#[a-zа-яё0-9]{1,19}$/i;

//Функция скрытия окна загрузки фотографии по клику
const closeUploadOverlay = () => {
  photoUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetScale();
  resetEffects();
  closeUploadOverlayButton.removeEventListener('click', closeUploadOverlay);
  photoUploadField.value = '';
};

//Функция скрытия окна загрузки фотографии по ESC
const closeUploadOverlayOnKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
    document.removeEventListener('keydown', closeUploadOverlayOnKeydown);
  }
};

//Вешаем слушатели и открываем модальное окно при загрузке фотографии
photoUploadField.onchange = function () {
  photoUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeUploadOverlayOnKeydown);
  closeUploadOverlayButton.addEventListener('click', closeUploadOverlay);
};

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const getTagsArray = (tags) => {
  const value = tags
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return value;
};

const getValidLength = (tags) =>
  getTagsArray(tags).every(tag => tag.length >= MIN_HASHTAG_LENGTH && tag.length <= MAX_HASHTAG_LENGTH);

const getValidSymbols = (tags) => getTagsArray(tags).every(tag => HASHTAG_REGULAR_VALIDATE.test(tag));

const getUniqueTags = (tags) => {
  const lowerCaseTags = getTagsArray(tags).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const getValidCount = (tags) => getTagsArray(tags).length <= MAX_HASHTAG_COUNT;

pristine.addValidator(
  hashtagInputField,
  getValidLength,
  'Длина хештега от 2 до 20 символов'
);

pristine.addValidator(
  hashtagInputField,
  getValidSymbols,
  'Хэштег должен начинаться с #, допустимы только буквы и цифры, хэштег не может состоять только из #'
);

pristine.addValidator(
  hashtagInputField,
  getUniqueTags,
  'Хэштеги не должны повторяться'
);

pristine.addValidator(
  hashtagInputField,
  getValidCount,
  'Не более 5 хэштегов'
);


photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
