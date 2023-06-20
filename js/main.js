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

const offerTitle = [
  'Недорого, но уютно',
  'Премиум по цене комфорта',
  'В стиле лофт',
  'Бизнес-класс',
  'Экономный вариант',
  'Супер-люкс',
  'Просто и со вкусом',
  'В стиле хай-тэк',
  'Завтра будет дороже!',
  'Кто успел, тот и заехал',
  'Без труда, найдешь жильё у пруда'
];

const offerTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const offerCheckInOuts = [
  '12:00',
  '13:00',
  '14:00'
];

const offerFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const offerDescriptions = [
  'Тихие соседи и хороший район',
  'Экологически чистый район',
  'Солнечная сторона, всегда светло и тепло',
  'Теневая сторона, в жару прохладно',
  'После свежего ремонта',
  'Отличный вид из окна',
  'Близко к центру',
  'Пешая доступность до метро'
];

const offerPhoto = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_CARDS = 10;

//Массив с последовательностью от 1 до OUANTITY_CARDS
const authorAvatars = Array.from({length: QUANTITY_CARDS}, (v, k) => ++k);
console.log(authorAvatars);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getOffer = () => {
  const latitude = getRandomWithDot(35.65000, 35.70000, 5);
  const longitude = getRandomWithDot(139.70000, 139.80000, 5);

  const getAuthorId = () => {
    let authorID = authorAvatars.shift();
    if (authorID < 10) {
      authorID = `0${authorID}`;
    }
    return `img/avatars/user${authorID}.png`;
  };

  return {
    author: {
      avatar: getAuthorId()
    },
    offer: {
      title: getRandomArrayElement(offerTitle),
      address: `${latitude},${longitude}`,
      price: getRandomInteger(3000, 15000),
      type: getRandomArrayElement(offerTypes),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(2, 6),
      checkin: getRandomArrayElement(offerCheckInOuts),
      checkout: getRandomArrayElement(offerCheckInOuts),
      features: offerFeatures.slice(0, getRandomInteger(1, offerFeatures.sort(() => Math.random() - 0.5).length)),
      description: getRandomArrayElement(offerDescriptions),
      photos: offerPhoto.slice(0, getRandomInteger(1, offerPhoto.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const newOffers = Array.from({length: QUANTITY_CARDS}, getOffer);
// eslint-disable-next-line no-console
console.log(newOffers);
