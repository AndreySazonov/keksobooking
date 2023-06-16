//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min && min !== String && max !== String) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Исходные данные неверны';
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomWithDot(min, max, digits) {
  if (min >= 0 && max >= 0 && max > min && min !== String && max !== String) {
    return Number(((Math.random() * (max - min)) + min).toFixed(digits));
  }
  return 'Исходные данные неверны';
}

getRandomInteger(0, 10);
getRandomWithDot(0, 10, 3);

const attachmentTitle = [
  'Недорого, но уютно',
  'Премиум по цене комфорта',
  'В стиле лофт',
  'Бизнес-класс',
  'Экономный вариант',
  'Супер-люкс',
  'Просто и со вкусом',
  'В стиле хай-тэк'
];

const typeOfHousing = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkInOut = [
  '12:00',
  '13:00',
  '14:00'
];

const housingFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const housingDescriptions = [
  'Тихие соседи и хороший район',
  'Экологически чистый район',
  'Солнечная сторона, всегда светло и тепло',
  'Теневая сторона, в жару прохладно',
  'После свежего ремонта',
  'Отличный вид из окна',
  'Близко к центру',
  'Пешая доступность до метро'
];

const housingPhoto = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getOffer = () => {
  const latitude = getRandomWithDot(35.65000, 35.70000, 5);
  const longitude = getRandomWithDot(139.70000, 139.80000, 5);

  let numberImg = getRandomInteger(1, 10);
  if (numberImg < 10) {
    numberImg = `0${numberImg}`;
  }
  console.log(attachmentTitle.length);
  return {
    author: {
      avatar: `img/avatars/user${numberImg}.png`
    },
    offer: {
      title: getRandomArrayElement(attachmentTitle),
      address: `${latitude},${longitude}`,
      price: getRandomInteger(3000, 15000),
      type: getRandomArrayElement(typeOfHousing),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(2, 6),
      checkin: getRandomArrayElement(checkInOut),
      checkout: getRandomArrayElement(checkInOut),
      features: housingFeatures.slice(0, getRandomInteger(1, housingFeatures.length)),
      description: getRandomArrayElement(housingDescriptions),
      photos: housingPhoto.slice(0, getRandomInteger(1, housingPhoto.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const newOffers = Array.from({length: 10}, getOffer);

console.log(newOffers);
