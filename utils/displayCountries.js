function displayCountries(countries) {
  const countriesMain = document.querySelector('.countries');
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
    countryEl.addEventListener('click', () => {
      localStorage.setItem('country', `${name}`);
    });
    countriesMain.appendChild(countryEl);
  });
}

export default displayCountries;
