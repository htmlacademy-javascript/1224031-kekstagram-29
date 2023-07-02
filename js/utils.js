
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

export {getRandomInteger, getRandomArrayElement, createIdGenerator};
