let nameOk = false;
let emailOk = false;
let phoneOk = false;
let messageOk = false;

function validateName() {

    let name = document.getElementById("name");
    if (!name.value){
        nameOk = false;
        document.getElementById("errorName").hidden = false;
        name.style.borderColor = "red";
        name.style.borderStyle = "solid";
    }
    else{
        document.getElementById("errorName").hidden = true;
        name.style.borderStyle = "none";
        nameOk = name.value;
    }
}
function validateEmail() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = document.getElementById("email");
    if (!email.value){
        emailOk = false;
        document.getElementById("errorEmail").hidden = false;
        document.getElementById("errorFormatEmail").hidden = true;
        email.style.borderColor = "red";
        email.style.borderStyle = "solid";
    }
    else if (!regex.test(email.value)){
        document.getElementById("errorEmail").hidden = true;
        document.getElementById("errorFormatEmail").hidden = false;
        email.style.borderColor = "red";
        email.style.borderStyle = "solid";
    }
    else 
    {
        document.getElementById("errorFormatEmail").hidden = true;
        email.style.borderStyle = "none";
        emailOk = email.value;
    }

}
function validatePhone() {

    let phone = document.getElementById("phone");
    if (!phone.value){
        phoneOk = false;
        document.getElementById("errorPhone").hidden = false;
        phone.style.borderColor = "red";
        phone.style.borderStyle = "solid";
    }
    else{
        document.getElementById("errorPhone").hidden = true;
        phone.style.borderStyle = "none";
        phoneOk = phone.value;
    }
}
function validateMessage() {

    let message = document.getElementById("message");
    if (message.value.length < 6){
        messageOk = false;
        document.getElementById("errorMessageUser").hidden = false;
        message.style.borderColor = "red";
        message.style.borderStyle = "solid";
    }
    else{
        document.getElementById("errorMessageUser").hidden = true;
        message.style.borderStyle = "none";
        messageOk = message.value;
    }
}
function sendForm() {

    let incompleteForm = document.getElementById("errorButton");
    if (nameOk === false && emailOk === false && phoneOk === false && messageOk === false){
        incompleteForm.hidden = false;
    }
    else{
        incompleteForm.hidden = true;
        incompleteForm.style.borderStyle = "none";
        console.log(nameOk, emailOk, phoneOk, messageOk);
    }
}