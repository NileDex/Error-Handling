var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("errorHandler");

function validateFullname() {
    var name = document.getElementById("contact-fullname").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Fullname";
        return False
    }
    nameError.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone Number Required';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone Number Should be 11 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email Required';
        return false;
    }
    

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!email.match(emailPattern)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contactmessage').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'morecharacters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    return true;
}
function validateForm() {
    if (!validateFullname() || !validateEmail() || !validatePhone() || !validateMessage()) {
        errorHandler.style.display = 'block';
        errorHandler.innerHTML = 'Please fix error to form';
        setTimeout(function(){errorHandler.style.display = 'none';}, 3000)
        return false;
    }
}
