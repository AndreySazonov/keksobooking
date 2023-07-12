const allInteractiveEllements = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelectorAll('.map__filter');

function deactiveMode () {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  for (const interactiveEllement of allInteractiveEllements) {
    interactiveEllement.setAttribute('disabled', '');
  }
  document.querySelector('.ad-form__slider').setAttribute('disabled', '');
  document.querySelector('.map__filters').classList.add('.map__filters--disabled');
  for (const mapFilter of mapFilters) {
    mapFilter.setAttribute('disabled', '');
  }
  document.querySelector('.map__features').setAttribute('disabled', '');
}

function activeMode () {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  for (const interactiveEllement of allInteractiveEllements) {
    interactiveEllement.removeAttribute('disabled');
  }
  document.querySelector('.ad-form__slider').removeAttribute('disabled');
  document.querySelector('.map__filters').classList.remove('.map__filters--disabled');
  for (const mapFilter of mapFilters) {
    mapFilter.removeAttribute('disabled');
  }
  document.querySelector('.map__features').removeAttribute('disabled');
}

deactiveMode();
activeMode();
