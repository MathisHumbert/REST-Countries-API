const colorMode = document.querySelector('.color-mode');
const selectFilter = document.querySelector('.select-filter');
const selectList = document.querySelector('.regions');
const countriesMain = document.querySelector('.countries');

const ALL_API = 'https://restcountries.com/v3.1/all';

async function getCountries(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayCountries(data);
}

getCountries(ALL_API);

function displayCountries(countries) {
  countriesMain.innerHTML = '';
  countries.forEach((country) => {
    let { name, population, region, capital, flags } = country;
    name = name.common;
    capital = capital || 'unkown';
    flags = flags.png;

    let countryEl = document.createElement('div');
    countryEl.classList.add('single-country');
    countryEl.innerHTML = `
    <img src="${flags}" alt="${name}" />
          <div class="country-info">
            <h1>${name}</h1>
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
