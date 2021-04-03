var registrationForm = document.querySelector("#registration__form");
var firstNameField = document.querySelector("#firstName");
var lastNameField = document.querySelector("#lastName");
var ageField = document.querySelector("#age");

function doesContainNonAlphabetic(word){
    return /[^a-zA-Z]/.test(word)
}

registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    var firstNameValue = firstNameField.value;
    var lastNameValue = lastNameField.value;
    var ageValue = parseInt(ageField.value);
    if(doesContainNonAlphabetic(firstNameValue)){
        alert("First name should only contain alphabets")
        return
    }
    
    if(doesContainNonAlphabetic(lastNameValue)){
        alert("Last name should only contain alphabets")
        return
    }

    if(ageValue < 18 || ageValue > 50){
        alert("Age should be between 18 and 50")
        return
    }

    registrationForm.reset()
    alert("Registration successful!!");
});