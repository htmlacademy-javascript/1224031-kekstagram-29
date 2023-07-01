import {getPhotoDescriptionInfo} from './get-photo-description-info.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content;
const getPhoto = getPhotoDescriptionInfo();

getPhoto.forEach((photo) => {
  const clonedPhoto = userPhotoTemplate.cloneNode(true);
  clonedPhoto.querySelector('.picture__img').src = photo.url;
  clonedPhoto.querySelector('.picture__img').alt = photo.description;
  clonedPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = photo.likes;
  userPhotosContainer.appendChild(clonedPhoto)
  }
)








