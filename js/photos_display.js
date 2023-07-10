import {getPhotoDescriptionInfo} from './get-photo-description-info.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoInfo = getPhotoDescriptionInfo();
const userPhotosFragment = document.createDocumentFragment();


//Показываем заголовок
document.querySelector('.pictures__title').classList.remove('visually-hidden');
//Заполняем миниатюру и окно показа фотографии данными
photoInfo.forEach(({id,url,description,comments,likes}) => {
  const clonedPhoto = userPhotoTemplate.cloneNode(true);

  //Миниатюра
  clonedPhoto.dataset.id = id;
  clonedPhoto.querySelector('.picture__img').src = url;
  clonedPhoto.querySelector('.picture__img').alt = description;
  clonedPhoto.querySelector('.picture__comments').textContent = comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = likes;

  //Большое окно
  clonedPhoto.querySelector('.picture__img').addEventListener('click', () => {
    document.querySelector('.big-picture__img img').src = url;
    document.querySelector('.big-picture__img img').alt = description
    document.querySelector('.likes-count').textContent = likes;
    document.querySelector('.comments-count').textContent = comments.length;
    document.querySelector('.social__caption').textContent = description;
  });

  userPhotosFragment.appendChild(clonedPhoto);
});

userPhotosContainer.appendChild(userPhotosFragment);

//Убираем блоки счётчика комментариев и загрузки новых комментариев


