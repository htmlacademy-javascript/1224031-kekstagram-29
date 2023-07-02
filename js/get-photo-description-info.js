import {getIdArray, getPhotoLikes, getPhotoUrl} from './creating-arrays.js';
import {getRandomInteger} from './utils.js';
import {DESCRIPTIONS} from './data.js';
import {commentsToPhoto} from './comments-to-photo.js';

const MIN_DESCRIPTIONS_STRING_NUMBER = 0;
const MAX_DESCRIPTIONS_STRING_NUMBER = 7;

const photoUrlArray = getPhotoUrl();
const photoLikesArray = getPhotoLikes();

//Создаём итоговый объект
const getPhotoDescriptionInfo = () => getIdArray().map((item, index) => (
  { ...item,
    ...photoUrlArray[index],
    description: DESCRIPTIONS[getRandomInteger(MIN_DESCRIPTIONS_STRING_NUMBER,MAX_DESCRIPTIONS_STRING_NUMBER)],
    ...photoLikesArray[index],
    comments: commentsToPhoto()
  }
));

export {getPhotoDescriptionInfo};
