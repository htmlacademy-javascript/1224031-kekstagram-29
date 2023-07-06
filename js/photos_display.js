import {getPhotoDescriptionInfo} from './get-photo-description-info.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content;

const photoInfo = getPhotoDescriptionInfo();
const userPhotosFragment = document.createDocumentFragment();

photoInfo.forEach(({url, description,comments,likes}) => {
  const clonedPhoto = userPhotoTemplate.cloneNode(true);

  clonedPhoto.querySelector('.picture__img').src = url;
  clonedPhoto.querySelector('.picture__img').alt = description;
  clonedPhoto.querySelector('.picture__comments').textContent = comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = likes;

  clonedPhoto.addEventListener('click', () => {
    document.querySelector('.big-picture__img img').src = url
  })
  userPhotosFragment.appendChild(clonedPhoto);
});

userPhotosContainer.appendChild(userPhotosFragment);
