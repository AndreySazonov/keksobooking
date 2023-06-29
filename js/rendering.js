import {createNewOffers} from './data.js';

//Контейнер для проверки отображения объявлений на странице
const offerContainer = document.querySelector('#map-canvas');

//Шаблон объявления
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const newOffers = createNewOffers();

const offerFragment = document.createDocumentFragment();

const typeOfHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

newOffers.forEach((post) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = post.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = post.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${post.offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = typeOfHouse[post.offer.type];
  //Склонения по гостям и комнатам
  offerElement.querySelector('.popup__text--capacity').textContent = `${post.offer.rooms} комнаты для ${post.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${post.offer.checkin}, выезд до ${post.offer.checkout}`;

  const offerFeaturesContainer = offerElement.querySelector('.popup__features');
  const offerFeaturesList = offerFeaturesContainer.querySelectorAll('.popup__feature');

  //first
  // offerFeaturesContainer.innerHTML = '';
  // post.offer.features.forEach((feature) => {
  //   const featureItem = document.createElement('li');
  //   featureItem.classList.add('popup__feature');
  //   featureItem.classList.add(`popup__feature--${feature}`);
  //
  //   offerFeaturesContainer.append(featureItem);
  // });

  //second
  // const offerFeaturesFragment = document.createDocumentFragment();
  // post.offer.features.forEach((feature) => {
  //   const featureItem = offerFeaturesContainer.querySelector(`.popup__feature--${feature}`);
  //   if (featureItem) {
  //     offerFeaturesFragment.append(featureItem);
  //   }
  // });
  // offerFeaturesContainer.innerHTML = '';
  // offerFeaturesContainer.append(offerFeaturesFragment);

  //third
  offerFeaturesList.forEach((featureItem) => {
    const isFeature = post.offer.features.some(
      (feature) => featureItem.classList.contains(`popup__feature--${feature}`)
    );
    if (!isFeature) {
      featureItem.remove();
    }
  });

  offerElement.querySelector('.popup__description').textContent = post.offer.description;

  //Продумать более изящное решение
  const offerPhotos = offerElement.querySelector('.popup__photos');
  const offerPhoto = offerElement.querySelector('.popup__photo');
  if (post.offer.photos.length) {
    for (let i = 0; i < post.offer.photos.length; i++) {
      offerPhoto.src = post.offer.photos[i];
      const cloneOfferPhoto = offerPhoto.cloneNode(true);
      if (i !== post.offer.photos.length - 1) {
        offerPhotos.append(cloneOfferPhoto);
      }
    }
  } else {
    offerPhotos.classList.add('hidden');
  }

  offerElement.querySelector('.popup__avatar').src = post.author.avatar;

  offerFragment.append(offerElement);
});

offerContainer.append(offerFragment);
