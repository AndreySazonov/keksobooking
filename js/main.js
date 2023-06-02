//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomWithDot(min, max, digits) {
  if (min >= 0 && max >= 0 && max > min) {
    return ((Math.random() * (max - min)) + min).toFixed(digits);
  }
}

getRandomInteger(0, 10);
console.log(getRandomWithDot(0, 10, 3));
