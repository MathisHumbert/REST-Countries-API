// get the data and use it for the app.js

import displayCountries from './displayCountries.js';
import fetchCountries from './fetch.js';

async function getCountries(url) {
  const data = await fetchCountries(url);

  if (data) displayCountries(data);
  else return;
}

export default getCountries;
