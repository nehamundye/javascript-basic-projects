const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// console.log(btns)

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        console.log(event.currentTarget.classList);
        const logic = event.currentTarget.classList
        if (logic.contains('decrease')) {
            // console.log(value.innerHTML)
            currentValue = parseInt(value.innerHTML)
            value.innerHTML = currentValue-1
        }

        if (logic.contains('reset')) {
            // console.log(value.innerHTML)
            currentValue = parseInt(value.innerHTML)
            value.innerHTML = 0
        }

        if (logic.contains('increase')) {
            // console.log(value.innerHTML)
            currentValue = parseInt(value.innerHTML)
            value.innerHTML = currentValue+1
            // console.log(value.innerHTML)
        }

        if ( parseInt(value.innerHTML) > 0) {
            value.style.color = 'green'
        }

        if ( parseInt(value.innerHTML) === 0) {
            value.style.color = 'black'
        }

        if ( parseInt(value.innerHTML) < 0) {
            value.style.color = 'red'
        }

    })
});