
var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var eMailRegEx = /^\S+@\S+\.\S+$/;

function checkInput() {
    if ( inputName.value.trim() !== "" &&
         eMailRegEx.test(inputMail.value) &&
         inputMessage.value.trim() !== "" ) {
        button.style.backgroundColor = '#fa923f';
        button.disable = false;
    } else {
        button.style.backgroundColor = '#979695';
        button.disable = true;
    }
}
