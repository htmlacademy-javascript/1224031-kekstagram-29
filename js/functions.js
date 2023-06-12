const stringLengthCheck = (string,maxLength) => {
  string = string.toString();
  const stringLength = string.length;
  return stringLength <= maxLength;

};
stringLengthCheck('проверяемая строка', 10);

const palindromeCheck = (string) => {
  string = string.replaceAll(' ','');
  string = string.toLowerCase();
  let emptyString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    emptyString += string.at(i);
  }
  return string === emptyString;
};
palindromeCheck('топот');

const numberExtraction = (string) => {
  string = string.toString();
  string = string.replaceAll(' ','');
  let stringNumbers = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(Number(string.at(i)))) {
      stringNumbers += string.at(i);
    }
  }
  parseInt(stringNumbers,10);
  return stringNumbers;
};

numberExtraction('агент 007');
