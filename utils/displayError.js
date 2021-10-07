// Display Error
const error = document.querySelector('.error');
function displayError() {
  error.style.visibility = 'visible';

  setTimeout(() => {
    error.style.visibility = 'hidden';
  }, 3000);
}

export default displayError;
