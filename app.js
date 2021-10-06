// import
import getCountries from './utils/getCountries.js';
import displayCountries from './utils/displayCountries.js';

// let data = getCountries();
// console.log(data)

// getting all elemnts
const colorMode = document.querySelector('.color-mode');
const selectFilter = document.querySelector('.filter-header');
const selectList = document.querySelector('.regions');
const countriesMain = document.querySelector('.countries');
const form = document.getElementById('search-form');
const textInput = document.getElementById('country-name');

// API
const ALL_API = 'https://restcountries.com/v3.1/all';
const REGION_API = 'https://restcountries.com/v3.1/region/';
const NAME_API = 'https://restcountries.com/v3.1/name/';

// load all of the countries
getCountries(ALL_API);

// filter by region
selectList.addEventListener('click', getTheRegion);

function getTheRegion(e) {
  if (e.target.classList.contains('show')) return;
  getCountries(REGION_API + e.target.textContent);
}

// filter by name
form.addEventListener('submit', getTheName);

function getTheName(e) {
  e.preventDefault();
  getCountries(NAME_API + textInput.value);
  this.reset();
}

// Color toggle
colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});

// Select event
selectFilter.addEventListener('click', () => {
  selectList.classList.toggle('show');
});
