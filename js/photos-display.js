import {getPhotoDescriptionInfo} from './get-photo-description-info.js';
import {commentsToBigPicture} from './comments-to-big-picture.js';
import {isEscapeKey} from './utils.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoInfo = getPhotoDescriptionInfo();
const userPhotosFragment = document.createDocumentFragment();

const commentsLoadButton = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.social__comment-count');


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
    document.querySelector('.big-picture__img img').alt = description;
    document.querySelector('.likes-count').textContent = likes;
    document.querySelector('.social__caption').textContent = description;

    if (comments.length === 0) {
      commentsToBigPicture(comments);
      commentsCounter.innerHTML = 'Комментариев нет';
      commentsLoadButton.classList.add('hidden');
    } else if (comments.length <= 5) {
      commentsToBigPicture(comments.slice(0,5));
      commentsLoadButton.classList.add('hidden');
      commentsCounter.innerHTML = `${comments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
    } else {

      let counter = 5;

      const getComments = () => {
        counter += 5;
        commentsToBigPicture(comments.slice(0,counter));
        commentsCounter.innerHTML = `${counter} из <span class="comments-count">${comments.length}</span> комментариев`;
        if (counter >= comments.length) {
          commentsCounter.innerHTML = `${comments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
          commentsToBigPicture(comments);
          commentsLoadButton.classList.add('hidden');
        }
      };

      const getCommentsListenerRemove = (evt) => {
        commentsLoadButton.removeEventListener('click', getComments);
        document.querySelector('.big-picture__cancel').removeEventListener('click', getCommentsListenerRemove);
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          document.querySelector('.big-picture__cancel').removeEventListener('click', getCommentsListenerRemove);
          document.removeEventListener('keydown', getCommentsListenerRemove);
        }
      };

      commentsToBigPicture(comments.slice(0,counter));
      commentsLoadButton.classList.remove('hidden');
      commentsCounter.innerHTML = `${counter} из <span class="comments-count">${comments.length}</span> комментариев`;

      commentsLoadButton.addEventListener('click', getComments);
      document.querySelector('.big-picture__cancel').addEventListener('click', getCommentsListenerRemove);
      document.addEventListener('keydown', getCommentsListenerRemove);
    }
  });

  userPhotosFragment.appendChild(clonedPhoto);
});

userPhotosContainer.appendChild(userPhotosFragment);
