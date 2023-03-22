const form = document.getElementById("form")
const myInput = document.getElementById('myInput')


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('myInput')
	const email = input.value
	form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
})

 //navratova hodnota true/false
 myInput.addEventListener('input', function() {
    if (myInput.value === "" || myInput.value.indexOf("@") === -1) {
      myInput.classList.add("red-border")
    } else {
      myInput.classList.remove("red-border")
    }
  })

