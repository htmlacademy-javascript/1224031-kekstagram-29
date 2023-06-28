import {createIdGenerator, getRandomArrayElement, getRandomInteger} from './utils.js';
import {COMMENTS, NAMES} from './data.js';

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;

//Создаём случайный объект-комментарий
const generateCommentId = createIdGenerator();
const getComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

//Создаём массив с комментариями
const commentsToPhoto = () => Array.from({length: getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)}, getComment);

export {commentsToPhoto};
