const img = document.querySelector('img');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
        
leftButton.addEventListener('click', () => {
img.style.marginLeft = '0'; })
        
rightButton.addEventListener('click', () => {
img.style.marginLeft = '50px';
})


