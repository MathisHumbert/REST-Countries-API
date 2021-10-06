import displayCountries from './displayCountries.js';
import displayError from './displayError.js';

async function getCountries(url) {
  const response = await fetch(url);
  if (response.status === 404) {
    return displayError();
  }
  const data = await response.json();

  // display the countries
  displayCountries(data);
}

export default getCountries;
// function accessing data
