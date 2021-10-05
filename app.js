const colorMode = document.querySelector('.color-mode');
const selectFilter = document.querySelector('.select-filter');
const selectList = document.querySelector('.regions');

// Color toggle
colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});

// Select event
selectFilter.addEventListener('click', () => {
  selectList.classList.toggle('show');
});
