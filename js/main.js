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

//Вспомогательная функция для генерации случайного числа в заданном диапазоне
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Вспомогательная функция, возвращающая случайный элемент массива
const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

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
    result.push({likes: getRandomInteger(15,200)});
  }
  return result;
};

//Создаём случайный объект-комментарий
const getComment = () => ({
  id: getRandomInteger(1,200),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

//Создаём массив с комментариями
const commentsToPhoto = Array.from({length: getRandomInteger(0, 30)}, getComment);

//Создаём итоговый массив
const getPhotoDescriptionInfo = () => getIdArray().map((item, index) => (
  { ...item,
    ...getPhotoUrl()[index],
    description: DESCRIPTIONS[getRandomInteger(0,7)],
    ...getPhotoLikes()[index],
    comments: commentsToPhoto
  }
));

getPhotoDescriptionInfo();
