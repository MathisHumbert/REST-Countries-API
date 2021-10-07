// get the data and use it for the countryPage.js

import fetchCountries from './fetch.js';
import displayCountry from './displayCountry.js';

async function getCountry(url) {
  const data = await fetchCountries(url);

  displayCountry(data);
}

export default getCountry;
