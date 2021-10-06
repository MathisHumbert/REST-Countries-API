// Get the country data for the displayCountry function and then Display the HTML

import displayError from './displayError.js';
import displayCountry from './displayCountry.js';

async function getCountry(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // display the country
    displayCountry(data);
  } catch (error) {
    displayError();
    console.log(error);
  }
}

export default getCountry;
