import {getIdArray, getPhotoLikes, getPhotoUrl} from './creating-arrays.js';
import {getRandomInteger} from './utils.js';
import {DESCRIPTIONS} from './data.js';
import {commentsToPhoto} from './comments-to-photo.js';

const MIN_DESCRIPTIONS_STRING_NUMBER = 0;
const MAX_DESCRIPTIONS_STRING_NUMBER = 7;

//Создаём итоговый объект
const getPhotoDescriptionInfo = () => getIdArray().map((item, index) => (
  { ...item,
    ...getPhotoUrl()[index],
    description: DESCRIPTIONS[getRandomInteger(MIN_DESCRIPTIONS_STRING_NUMBER,MAX_DESCRIPTIONS_STRING_NUMBER)],
    ...getPhotoLikes()[index],
    comments: commentsToPhoto()
  }
));

export {getPhotoDescriptionInfo};
