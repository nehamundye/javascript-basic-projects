// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

modalDiv = document.querySelector('.modal-overlay')
openModalBtn = document.querySelector('.modal-btn')
closeModalBtn = document.querySelector('.close-btn')

openModalBtn.addEventListener('click', function() {
    // console.log(openModalBtn.classList.vale);
    modalDiv.classList.add('open-modal')
});

closeModalBtn.addEventListener('click', function() {
    modalDiv.classList.remove('open-modal')
});