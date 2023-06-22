//Задаём количество идентификаторов
const idCount = 25;

//Задаём массивы с именами, комментариями и описаниями
const NAMES = [
  'Денетор',
  'Элронд',
  'Исильдур',
  'Теоден',
  'Арвен',
  'Эовин',
  'Мириэль',
  'Анайрэ'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Я на природе',
  'Горы перед закатом',
  'Прекрасный восход',
  'Джонни, они на деревьях!',
  'Моя прелесть',
  'На прогулке с Кексом',
  'В гостях хорошо, а дома лучше',
  'Только посмотрите на эту прелесть'
];

const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_DESCRIPTIONS_STRING_NUMBER = 0;
const MAX_DESCRIPTIONS_STRING_NUMBER = 7;

//Вспомогательная функция для генерации случайного числа в заданном диапазоне
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Вспомогательная функция, возвращающая случайный элемент массива
const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

//Вспомогательная функция-генератор ID
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

//Создаём массив идентификаторов
const getIdArray = () => {
  const result = [];
  for (let i = 1; i <= idCount; i++) {
    result.push({id: i});
  }
  return result;
};

//Создаём массив url фотографий
const getPhotoUrl = () => {
  const result = [];
  for (let i = 1; i <= idCount; i++) {
    result.push({url: `photos/${i}.jpg`});
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

//Создаём итоговый массив
const getPhotoDescriptionInfo = () => getIdArray().map((item, index) => (
  { ...item,
    ...getPhotoUrl()[index],
    description: DESCRIPTIONS[getRandomInteger(MIN_DESCRIPTIONS_STRING_NUMBER,MAX_DESCRIPTIONS_STRING_NUMBER)],
    ...getPhotoLikes()[index],
    comments: commentsToPhoto()
  }
));

getPhotoDescriptionInfo();
