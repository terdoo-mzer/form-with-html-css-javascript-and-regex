const form = document.querySelector(".form");
// const feedback = document.querySelector(".feedback");
const submitBtn = document.querySelector(".submit-btn");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#pwd");


form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();

    // form.reset();
})

function validateForm() {
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const pattern = /^\S+@\S+\.\S+$/

    if(fnameValue === ''){
        checkError(fname, 'First name cannot be empty') 
    }  else{
        console.log(fnameValue)
        checkSuccess(fname)
    }

    if(lnameValue === ''){
        checkError(lname, 'Last name cannot be empty') 
    }  else{
        checkSuccess(lname)
    }
    if(!pattern.test(emailValue)){
        checkError(email, 'Looks like this is not an email') 
    }  else{
        checkSuccess(email)
    }
    if(passwordValue === ''){
        checkError(password, 'Password name cannot be empty') 
    }  else{
        checkSuccess(password)
        console.log(passwordValue)
    }

}

function checkError(input, message) {
    const formGroup = input.parentElement;
    const feedback = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    feedback.innerHTML = message;
}

function checkSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

form.addEventListener("keyup", function(e) {
    
})