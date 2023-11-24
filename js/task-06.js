const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
  const enteredValue = inputElement.value;
  const requiredLength = inputElement.dataset.length;

  if (enteredValue.length === Number(requiredLength)) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});