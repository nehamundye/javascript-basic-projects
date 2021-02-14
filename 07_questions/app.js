//using selectors inside the element
const questions = document.querySelectorAll('.question');
// console.log(questions)
questions.forEach(question => {
    // console.log(question.querySelector('.question-btn'));

    const btn = question.querySelector('.question-btn');
    // console.log(btn)
    
    btn.addEventListener('click', function() {
        questions.forEach(item => {
            // console.log(item)
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    });
    
});

// traversing the dom
// const questionBtn = document.querySelectorAll('.question-btn')

// questionBtn.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const button = e.currentTarget.parentElement.parentElement
//         if (button.classList.value === 'question') {
//             button.classList.add('show-text');
//             // console.log(button.classList.value)
//         } 
//         else if (button.classList.value === 'question show-text') {
//             // Remove text when minus button is clicked
//             button.classList.remove('show-text');
//         } 
//     });
// });
