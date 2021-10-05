const colorMode = document.querySelector('.color-mode');
const selectFilter = document.querySelector('.filter-header');
const selectList = document.querySelector('.regions');
const countriesMain = document.querySelector('.countries');
const form = document.getElementById('search-form');
const textInput = document.getElementById('country-name');

const ALL_API = 'https://restcountries.com/v3.1/all';
const REGION_API = 'https://restcountries.com/v3.1/region/';
const NAME_API = 'https://restcountries.com/v3.1/name/';

// function accessing data
async function getCountries(url) {
  const response = await fetch(url);
  if (response.status === 404) {
    return displayError();
  }
  const data = await response.json();

  // display the countries
  displayCountries(data);
}

// load all of the countries
getCountries(ALL_API);

// filter by region
selectList.addEventListener('click', getTheRegion);

function getTheRegion(e) {
  if (e.target.classList.contains('show')) return;
  getCountries(REGION_API + e.target.textContent);
}

// filter by name
form.addEventListener('submit', getTheName);

function getTheName(e) {
  e.preventDefault();
  getCountries(NAME_API + textInput.value);
  this.reset();
}

// display the countries
function displayCountries(countries) {
  countriesMain.innerHTML = '';
  countries.forEach((country) => {
    let { name, population, region, capital, flags } = country;
    name = name.common;
    capital = capital || 'unkown';
    flags = flags.png;

    let countryEl = document.createElement('a');
    countryEl.classList.add('single-country');
    countryEl.setAttribute('href', 'country.html');
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
    countriesMain.appendChild(countryEl);
  });
}

// Color toggle
colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});

// Select event
selectFilter.addEventListener('click', () => {
  selectList.classList.toggle('show');
});

// Display Error
function displayError() {
  alert('no such country');
}
