import {getPhotoDescriptionInfo} from './get-photo-description-info.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content;

const getPhoto = getPhotoDescriptionInfo();
const userPhotosFragment = document.createDocumentFragment();

getPhoto.forEach(({url, description,comments,likes}) => {
  const clonedPhoto = userPhotoTemplate.cloneNode(true);
  clonedPhoto.querySelector('.picture__img').src = url;
  clonedPhoto.querySelector('.picture__img').alt = description;
  clonedPhoto.querySelector('.picture__comments').textContent = comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = likes;
  userPhotosFragment.appendChild(clonedPhoto);
});

userPhotosContainer.appendChild(userPhotosFragment);

