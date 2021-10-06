// import
import getCountry from './utils/getCountry.js';
import color from './utils/colorToggle.js';

const BORDER_API = 'https://restcountries.com/v3.1/alpha/';

// load page
let countryStorage = localStorage.getItem('country');
getCountry(BORDER_API + countryStorage);
