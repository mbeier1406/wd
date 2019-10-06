
var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var eMailRegEx = /^\S+@\S+\.\S+$/;
var form = document.querySelector('.form');

function checkInput() {
    if ( inputName.value.trim() !== "" &&
         eMailRegEx.test(inputMail.value) &&
         inputMessage.value.trim() !== "" ) {
        button.disabled = false;
        button.style.backgroundColor = '#fa923f';
        console.log('enabled');
    } else {
        button.disabled = true;
        button.style.backgroundColor = '#979695';
        console.log('disabled');
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); /* Standardverhalten "zum Server senden" unterdrücken */
    console.log(event);
})
