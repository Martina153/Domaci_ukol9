const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const form = document.getElementById("loginForm")
const emailField = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", function(event) {
    const emailValue = emailField.value
    const passwordValue = password.value
    event.preventDefault()

    if (emailValue === user.email && passwordValue === user.password) {
    form.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>` }
    else {
         // zobrazíme zprávu o neplatných přihlašovacích údajích
    const invalidLoginMessage = document.createElement("p")
    invalidLoginMessage.innerText = "Neplatné přihlašovací údaje" 
    invalidLoginMessage.classList.add("invalid-login")   
    form.insertBefore(invalidLoginMessage, emailField.nextSibling)
    password.value = ''}
  
})