
//Вспомогательная функция для генерации случайного числа в заданном диапазоне
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Вспомогательная функция, возвращающая случайный элемент массива
const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

//Вспомогательная функция, возвращающая случайный НЕПОВТОРЯЮЩИЙСЯ элемент массива
const getRandomUnicArrayElement = (array, index) => {
  let result = [];

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (result.length !== index) {
    let index = getRandomInt(array.length);
    result.push(array[index]);
    result = result.filter((v, i, arr) =>  arr.indexOf(v) === i);
  }
  return result;
}

//Вспомогательная функция-генератор ID
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export {getRandomInteger, getRandomArrayElement, getRandomUnicArrayElement, createIdGenerator};
