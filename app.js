// import
import getCountries from './utils/getCountries.js';
import color from './utils/colorToggle.js';

// getting all elemnts
const selectFilter = document.querySelector('.filter-header');
const selectList = document.querySelector('.regions');
const form = document.getElementById('search-form');
const textInput = document.getElementById('country-name');

// API
const ALL_API = 'https://restcountries.com/v3.1/all';
const REGION_API = 'https://restcountries.com/v3.1/region/';
const NAME_API = 'https://restcountries.com/v3.1/name/';

// load all of the countries
window.addEventListener('DOMContentLoaded', () => {
  getCountries(ALL_API);
});

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

// Select event
selectFilter.addEventListener('click', () => {
  selectList.classList.toggle('show');
});
