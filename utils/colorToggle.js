// Color toggle function
const colorMode = document.querySelector('.color-mode');
let html = document.querySelector('html');

let color = colorMode.addEventListener('click', (e) => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('color', 'white');
  } else {
    html.classList.add('dark');
    localStorage.setItem('color', 'dark');
  }
});

export default color;
