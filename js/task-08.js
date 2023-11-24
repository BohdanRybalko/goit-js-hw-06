const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const { email, password } = form.elements; 
  
  if (email.value === '' || password.value === '') {
    alert('all fields must be filled'); 
    return;
  }
  
  const loginData = {
    email: email.value,
    password: password.value
  }; 
  
  console.log(loginData); 
  form.reset(); 
});