// import
import getCountry from './utils/getCountry.js';
import colorLoad from './utils/colorLoad.js';
import color from './utils/colorToggle.js';

let bgColor = '';
const BORDER_API = 'https://restcountries.com/v3.1/alpha/';

// load page
let countryStorage = localStorage.getItem('country');
window.addEventListener('DOMContentLoaded', () => {
  getCountry(BORDER_API + countryStorage);
  colorLoad();
});
