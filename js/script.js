//Applcation state control

let tabCountries = null;
let tabFavorites = null;

let allCountries = null;
let favoriteCountries = null;

let countContries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;
window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');

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
    const { id: numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag
    }
  })
  render();
}

function render() {
  renderCountryList();
  renderFavorities();
  renderSummary();
  handleCountryButtons();

}

function renderCountryList() {

}

function renderFavorities() {

}

function renderSummary() {

}

function handleCountryButtons() {
  
}
