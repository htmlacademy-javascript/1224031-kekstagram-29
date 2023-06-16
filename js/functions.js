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
