const colorMode = document.querySelector('.color-mode');
const BorderBtn = document.querySelectorAll('.single-country-border');

// Disaply Border country
BorderBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  })
);

// Color toggle
colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});

// récupérer la data selon le localStorage
// créer disaplyCountry qui crée le HTML selon le pays
// finir display border country qui dispayCountry selon le pays qu'on clique
let country = localStorage.getItem('country');
console.log(country);
