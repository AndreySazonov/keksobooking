import {getRandomInteger, getRandomWithDot, getRandomArrayElement} from './util.js';

const OFFER_TITLE = [
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

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const OFFER_CHECK_IN_OUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const OFFER_DESCRIPTIONS = [
  'Тихие соседи и хороший район',
  'Экологически чистый район',
  'Солнечная сторона, всегда светло и тепло',
  'Теневая сторона, в жару прохладно',
  'После свежего ремонта',
  'Отличный вид из окна',
  'Близко к центру',
  'Пешая доступность до метро'
];

const OFFER_PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_CARDS = 10;

//Массив с последовательностью от 1 до OUANTITY_CARDS
const authorAvatars = Array.from({length: QUANTITY_CARDS}, (v, k) => ++k);

const createNewOffer = () => {
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
      title: getRandomArrayElement(OFFER_TITLE),
      address: `${latitude},${longitude}`,
      price: getRandomInteger(3000, 15000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(2, 6),
      checkin: getRandomArrayElement(OFFER_CHECK_IN_OUTS),
      checkout: getRandomArrayElement(OFFER_CHECK_IN_OUTS),
      features: OFFER_FEATURES.slice(0, getRandomInteger(1, OFFER_FEATURES.sort(() => Math.random() - 0.5).length)),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: OFFER_PHOTO.slice(0, getRandomInteger(1, OFFER_PHOTO.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const createNewOffers = () => Array.from({length: QUANTITY_CARDS}, createNewOffer);

export {createNewOffers};
