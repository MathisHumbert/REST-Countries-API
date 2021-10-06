import displayCountries from './displayCountries.js';
import displayError from './displayError.js';

// function accessing data
async function getCountries(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // display the countries
    displayCountries(data);
  } catch (error) {
    displayError();
    console.log(error);
  }
}

export default getCountries;
