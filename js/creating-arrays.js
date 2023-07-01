import {idCount} from './data.js';
import {getRandomInteger} from './utils.js';

//Необходимые константы
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

//Создаём массив идентификаторов
const getIdArray = () => {
  const result = [];
  for (let i = 1; i <= idCount; i++) {
    result.push({id: i});
  }
  return result;
};

//Создаём массив с лайками
const getPhotoLikes = () => {
  const result = [];
  for (let i = 1; i <= idCount; i++) {
    result.push({likes: getRandomInteger(MIN_LIKES_COUNT,MAX_LIKES_COUNT)});
  }
  return result;
};

//Создаём массив url фотографий
const getPhotoUrl = () => {
  const result = [];
  for (let i = 1; i <= idCount; i++) {
    result.push({url: `photos/${i}.jpg`});
  }
  result.sort(()=>Math.random()-0.5)
  return result;
};
console.log(getPhotoUrl())

export {getIdArray, getPhotoLikes, getPhotoUrl};
