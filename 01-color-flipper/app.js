const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // console.log(document.body)
    // change the background color of body and take colors randomly from colors list
    const randomNumber = Math.floor(Math.random() * colors.length);     // returns a random integer from 0 to 9
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]
});