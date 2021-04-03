var loginForm = document.querySelector("#login__form");
var emailField = document.querySelector("#email");
var passwordField = document.querySelector("#password");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    var emailValue = emailField.value;
    var passwordValue = passwordField.value;

    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email_validator_regex.test(emailValue)){
        alert("Invalid email!")
        return
    }
    // loginForm.reset()
    alert("Registration successful!!");
});