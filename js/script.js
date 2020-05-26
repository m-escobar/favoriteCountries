//Applcation state control

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('.tabCountries');
  tabFavorites = document.querySelector('.tabFavorites');

  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  
  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
})

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map(country => {
    const { numericCode, translations, population, flag } = country;

    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag
    }
  })
  console.log(allCountries);
  render();
}

function render() {
  renderCountryList();
  renderFavorities();
  renderSummary();
  handleCountryButtons();

}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach(country => {
    const {name, id, population, flag } = country;
    const countryHTML = `
    <div class="country">
      <div>
        <a id="${id}" class="waves-effect waves-ligh btn">+</a>
      </div>
      <div>
        <img src="${flag}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${population}</li>
        </ul>
      </div>
    </div>
    `;

    countriesHTML += countryHTML;
  });
  
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorities() {
  let favoritesHTML = '<div>';

  favoriteCountries.forEach(country => {
    const {name, id, population, flag } = country;
    const favoriteCountryHTML = `
    <div class="country">
    <div>
      <a id="${id}" class="waves-effect waves-ligh btn red darken-4">-</a>
    </div>
    <div>
      <img src="${flag}" alt="${name}">
    </div>
    <div>
      <ul>
        <li>${name}</li>
        <li>${population}</li>
      </ul>
    </div>
    </div>
    `;

    favoritesHTML += favoriteCountryHTML;
  });
  
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = totalPopulation;

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
      return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = totalPopulation; 
}
function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach(button => {
    button.addEventListener('click', () => addToFavorites(button.id));
  })

  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => removeFromToFavorites(button.id));
  })
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find(button => button.id === id);
  console.log(countryToAdd);
}

function removeFromToFavorites(id) {

}