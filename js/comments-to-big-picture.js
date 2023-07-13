const commentsList = document.querySelector('.social__comments');
commentsList.innerHTML = '';

commentsList.insertAdjacentHTML('beforebegin', `<li class="social__comment">
    <img
        class="social__picture"
        src=""
        alt=""
        width="35" height="35">
    <p class="social__text"></p>
</li>`
);

const userCommentFragment = document.createDocumentFragment();

const commentsToBigPicture = (commentsArray) => {
  commentsArray.forEach(({avatar, message, name}) => {
    const clonedComment = document.querySelector('.social__comment').cloneNode(true);

    clonedComment.querySelector('.social__picture').src = avatar;
    clonedComment.querySelector('.social__picture').alt = name;
    clonedComment.querySelector('.social__text').textContent = message;

    userCommentFragment.appendChild(clonedComment);
  });

  commentsList.appendChild(userCommentFragment);
}

//Удаляем первый пустой элемент списка
document.querySelector('.social__comment').remove();

export {commentsToBigPicture}
