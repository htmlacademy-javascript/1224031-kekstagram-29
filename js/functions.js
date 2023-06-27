const stringLengthCheck = (string,maxLength) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  return string.length <= maxLength;
};

stringLengthCheck('проверяемая строка', 10);

const palindromeCheck = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  let emptyString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    emptyString += string.at(i);
  }
  return string === emptyString;
};

palindromeCheck('топот');

const numberExtraction = (string) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  string = string.replaceAll(' ','');
  let stringNumbers = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(Number(string.at(i)))) {
      stringNumbers += string.at(i);
    }
  }
  return parseInt(stringNumbers,10);
};

numberExtraction('агент 007');

/*Напишите функцию, которая принимает время начала и конца рабочего дня,
а также время старта и продолжительность встречи в минутах и возвращает true,
если встреча не выходит за рамки рабочего дня, и false, если выходит.*/

//Вспомогательная функция для перевода времени в секунды

const getTimeInSeconds = (string) => {
  const hours = Number(string.split(':')[0]) * 60 * 60;
  const minutes = Number(string.split(':')[1]) * 60;

  return hours + minutes;
};


const getMeetingTimeCheck = (workDayStart, workDayEnd, meetingStart, meetingDuration) => {
  const meetingDurationInSeconds = meetingDuration * 60;

  return getTimeInSeconds(workDayStart) <= getTimeInSeconds(meetingStart) &&
    getTimeInSeconds(workDayEnd) > getTimeInSeconds(meetingStart) &&
    getTimeInSeconds(meetingStart) + meetingDurationInSeconds <= getTimeInSeconds(workDayEnd);
};

getMeetingTimeCheck('08:00', '17:30', '14:00', 90);
