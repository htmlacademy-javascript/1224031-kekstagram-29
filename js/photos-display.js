import {getPhotoDescriptionInfo} from './get-photo-description-info.js';
import {commentsToBigPicture} from './comments-to-big-picture.js';

const userPhotosContainer = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoInfo = getPhotoDescriptionInfo();
const userPhotosFragment = document.createDocumentFragment();

const commentsLoadButton = document.querySelector('.comments-loader');


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
    document.querySelector('.comments-count').textContent = comments.length;
    document.querySelector('.social__caption').textContent = description;

    if (comments.length <= 5) {
      commentsToBigPicture(comments)
      commentsLoadButton.classList.add('hidden')
    }

    if (comments.length > 5) {
      let counter = 10;
      commentsLoadButton.classList.remove('hidden')
      commentsToBigPicture(comments.slice(0,5))
      commentsLoadButton.addEventListener('click', () => {
        commentsToBigPicture(comments.slice(0,counter))
        counter += 5
      })

        if (counter > comments.length) {
          commentsLoadButton.classList.add('hidden')
          commentsLoadButton.removeEventListener('click', () => {
            commentsToBigPicture(comments.slice(0,counter))
            counter += 5
          })
        }
      }

    //Обновление списка комментариев по нажатию кнопки "Загрузить ещё"
      /*let counter = 5;
      if (comments.length <= 5) {
        commentsToBigPicture(comments);
        commentsLoadButton.classList.add('hidden')
      } else if (comments.length > 5){
        commentsLoadButton.classList.remove('hidden')
        commentsToBigPicture(comments.slice(0, 5));
        counter += 5;

        commentsLoadButton.addEventListener('click', () => {
          console.log(counter)
          commentsToBigPicture(comments.slice(0, counter));
          counter += 5;
        })
      }*/
  });

  userPhotosFragment.appendChild(clonedPhoto);
});

userPhotosContainer.appendChild(userPhotosFragment);


