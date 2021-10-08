function colorLoad() {
  let bgColor = '';
  let html = document.querySelector('html');

  if (!localStorage.getItem('color')) bgColor = 'white';
  else bgColor = localStorage.getItem('color');

  if (bgColor === 'white') html.classList.remove('dark');
  else html.classList.add('dark');
}

export default colorLoad;
