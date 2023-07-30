const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const photoScaleValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

const DEFAULT_VALUE = 100;
const MIN_VALUE = 25;

const getPhotoSmaller = () => {
  if (parseInt(photoScaleValue.value) > MIN_VALUE) {
    photoScaleValue.value = parseInt(photoScaleValue.value) - 25 + '%';
  }
  photoPreview.style.transform = `scale(${parseInt(photoScaleValue.value) / 100})`
};

const getPhotoBigger = () => {
  if (parseInt(photoScaleValue.value) < DEFAULT_VALUE) {
    photoScaleValue.value = parseInt(photoScaleValue.value) + 25 + '%';
  }
  photoPreview.style.transform = `scale(${parseInt(photoScaleValue.value) / 100})`
};

const resetScale = () => {
  photoScaleValue.value = DEFAULT_VALUE;
  photoPreview.style.transform = `scale(${DEFAULT_VALUE / 100})`;
}

scaleSmallerButton.addEventListener('click', getPhotoSmaller);
scaleBiggerButton.addEventListener('click', getPhotoBigger);

export {resetScale}
