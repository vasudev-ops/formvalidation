let nameInput = document.getElementById("name");

let formvalidation=document.getElementById("registerForm");
let errorName=document.getElementById("nameError");
//email
let emailInput = document.getElementById("email");
let errorEmail = document.getElementById("emailError");

//password

let pass=document.getElementById("password");
let passerror=document.getElementById("passwordError");

//finally success message

let message =document.getElementById("successMessage");




formvalidation.addEventListener("submit", function(e) {

    

    e.preventDefault();
    //name validation
    let nameValid = false;
    let username = nameInput.value;

    if (username.trim() === "") {
        errorName.textContent = "Name is required";
    } else {
        errorName.textContent = "";
        nameValid=true;
    }

    //Email validation
    let emailValid= false;
    let email=emailInput.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.trim() === ""){
        errorEmail.textContent="Email is Required"

    }else if(emailPattern.test(email)){
        errorEmail.textContent="";
        emailValid= true;

    }else {
        errorEmail.textContent = "Invalid email format";

    } 

    // Password validation
    let passValid = false;
    let password=pass.value;
    let passlength=password.length
    if(password.trim()===""){
        passerror.textContent="Password is Required";
    }else if(passlength >= 6){
        passerror.textContent="";
        passValid = true;
        
    }else{
        passerror.textContent = "Password must contain at least 6 characters";

    }
    
    //message after validation all
    if (nameValid && emailValid && passValid) {
        message.textContent = "Validation successful";
    } else {
        message.textContent = "";
    }
        



});

