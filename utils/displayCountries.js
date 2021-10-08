// Display the countries for the index.html
import formatPopulation from './formatPop.js';

function displayCountries(countries) {
  // Get elements and reset HTML
  const countriesMain = document.querySelector('.countries');
  countriesMain.innerHTML = '';

  // Create HTML
  countries.forEach((country) => {
    let { name, population, region, capital, flags } = country;
    name = name.common;
    capital = capital || 'Unkown';
    flags = flags.png;
    let localName = country.cca3;

    population = formatPopulation(population);

    let countryEl = document.createElement('a');
    countryEl.classList.add('single-country');
    countryEl.setAttribute('href', 'country-page.html');
    countryEl.innerHTML = `
    <img src="${flags}" alt="${name}" />
          <div class="country-info">
            <h1 class="country-name">${name}</h1>
            <div class="country-details">
              <p>Population: <span>${population}</span></p>
              <p>Region: <span>${region}</span></p>
              <p>Capital: <span>${capital}</span></p>
            </div>
          </div>
    `;
    countryEl.addEventListener('click', () => {
      localStorage.setItem('country', `${localName}`);
    });
    countriesMain.appendChild(countryEl);
  });
}

export default displayCountries;
