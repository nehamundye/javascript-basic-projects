const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // console.log(document.body)
    // change the background color of body and make colors by picking randomly from hex list
    let hexColor ='#'
    for (let i=0; i<6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    // document.body.style.background = "#FF7B00"
    document.body.style.background = hexColor
    color.textContent = hexColor
    // console.log(hexColor)
    
});