const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}



document.querySelector('#login-form').addEventListener('submit', (e) => {
	e.preventDefault()
  const emailInput = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const form = document.querySelector(".container");
 const status = document.querySelector('#status');
  
  // Check if the username and password are correct
  if (emailInput === user.email && password === user.password) {
    // Display the success message and hide the login form
    form.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
  } else {
    // Show an error message if the username or password is incorrect
    status.textContent = 'Neplatné přihlašovací údaje'
	passwordInput.value = ''
  }
});





