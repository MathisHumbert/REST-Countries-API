function colorLoad() {
  let bgColor = '';

  if (!localStorage.getItem('color')) bgColor = 'white';
  else bgColor = localStorage.getItem('color');

  console.log(bgColor);

  if (bgColor === 'white') document.body.classList.remove('dark');
  else document.body.classList.add('dark');
}

export default colorLoad;
