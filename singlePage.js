// import
import displayCountry from './utils/displayCountry.js';

const colorMode = document.querySelector('.color-mode');

const NAME_API = 'https://restcountries.com/v3.1/name/';
const BORDER_API = 'https://restcountries.com/v3.1/alpha/';

// load page
let countryStorage = localStorage.getItem('country');
console.log(BORDER_API + countryStorage);
getCountry(BORDER_API + countryStorage);

async function getCountry(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // display the country
    displayCountry(data);
  } catch (error) {
    console.log(error);
  }
}

// Color toggle
colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});
