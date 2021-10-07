// fetch the data

async function fetchCountries(url) {
  const response = await fetch(url);
  if (response.status === 404) {
    return console.log('ERROR');
  }
  const data = await response.json();
  return data;
}

export default fetchCountries;
