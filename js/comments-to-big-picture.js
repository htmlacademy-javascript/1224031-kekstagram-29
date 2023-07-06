import {commentsToPhoto} from './comments-to-photo.js';

const commentsList = document.querySelector('.social__comments');
commentsList.innerHTML = '';

commentsList.insertAdjacentHTML('beforebegin', '<li class="social__comment">\n' +
  '    <img\n' +
  '        class="social__picture"\n' +
  '        src=""\n' +
  '        alt=""\n' +
  '        width="35" height="35">\n' +
  '    <p class="social__text"></p>\n' +
  '</li>');

const commentsArray = commentsToPhoto();

const userCommentFragment = document.createDocumentFragment();
commentsArray.forEach(({avatar, message, name}) => {
  const clonedComment = document.querySelector('.social__comment').cloneNode(true);

  clonedComment.querySelector('.social__picture').src = avatar;
  clonedComment.querySelector('.social__picture').alt = name;
  clonedComment.querySelector('.social__text').textContent = message;

  userCommentFragment.appendChild(clonedComment);
});

commentsList.appendChild(userCommentFragment);

//Удаляем первый пустой элемент списка
document.querySelector('.social__comment').remove();
