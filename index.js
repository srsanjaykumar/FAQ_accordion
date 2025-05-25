// Answer -1

// function display_block(question,answer) {
//         answer.style.display = 'block';
//     question.children[1].src='./assets/images/icon-minus.svg';
// }
// function display_none(question,answer) {
//     answer.style.display = 'none';
//     question.children[1].src='./assets/images/icon-plus.svg';
// }

// document.querySelectorAll('.question').forEach(question => {
//     const answer = question.nextElementSibling;
//     question.addEventListener('click', () => {
//         if (answer.style.display === 'block') {
//             display_none(question, answer);
//         } else {
//             display_block(question, answer);
//         }
//     });

// });

//Answer -2 

function display_block(question,answer) {
    document.querySelectorAll('.answer').forEach(ans => {
        ans.style.display = 'none';
        console.log(ans.previousElementSibling);
        
        ans.previousElementSibling.children[1].src = './assets/images/icon-plus.svg';
    });
        answer.style.display = 'block';
        question.children[1].src='./assets/images/icon-minus.svg';
}
function display_none(question,answer) {
    answer.style.display = 'none';
    question.children[1].src='./assets/images/icon-plus.svg';
}

document.querySelectorAll('.question').forEach(question => {
    const answer = question.nextElementSibling;
    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            display_none(question, answer);
        } else {
            display_block(question, answer);
        }
    });

});