// Color toggle function
const colorMode = document.querySelector('.color-mode');

let color = colorMode.addEventListener('click', (e) => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('color', 'white');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('color', 'dark');
  }
});

export default color;
