const colorMode = document.querySelector('.color-mode');

colorMode.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
});
