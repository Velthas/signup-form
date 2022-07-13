// Import stylesheet
import './style.css';

// Importo Diamond SVG

import diamondPic from './images/diamond.svg'
document.querySelector('img').src = diamondPic;

// Form
const form = document.querySelector('form');

// Password inputs
const passInput = document.querySelector('#pass');
const repeatPass = document.querySelector('#passconfirm');

// Error span located under password input
const errorSpan = document.querySelector('input + span');

// Check if the two password fields are matching
function isMatching() {
    if(passInput.value !== repeatPass.value) return false;
    else return true;
}

// Generic function to add error message under the password input
// It also highlights the invalid password fields with a red border
function showError(message) {
    errorSpan.classList.add('error');
    passInput.classList.add('error');
    repeatPass.classList.add('error');
    errorSpan.textContent = message;
}

// This removes the effects of the previous function
function removeError() {
    errorSpan.classList.remove('error');
    passInput.classList.remove('error');
    repeatPass.classList.remove('error');
    errorSpan.textContent = ''
}

// When a form is submitted do some checks
// You pass in the event so that you can then call the preventDefault method
form.addEventListener('submit', function (event) {
    // If the passwords are matching, no problem
    if(isMatching()) return;
    // Otherwise show an error, and prevent the form from submitting
    else {
    showError('Password does not match');
    event.preventDefault();
    }
})

// Every time something is input in either field, check to see if the field is valid. 
passInput.addEventListener('input', function () {
    if(isMatching()) {
        removeError();
    }
    else showError('Password does not match')
});

repeatPass.addEventListener('input', function () {

    if(isMatching()) {
        removeError();
    }
    else showError('Password does not match')
})


