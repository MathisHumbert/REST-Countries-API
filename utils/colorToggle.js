// Color toggle function

const colorMode = document.querySelector('.color-mode');

let color = colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});

export default color;
