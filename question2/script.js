var registrationForm = document.querySelector("#registration__form");
var dobField = document.querySelector("#dob");
var joiningDateField = document.querySelector("#joiningDate");
var salaryField = document.querySelector("#salary");

registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    var dobValue = dobField.value;
    var joiningDateValue = joiningDateField.value;
    var salaryValue = parseFloat(salaryField.value);

    var dob = Date.parse(dobValue);
    var joiningDate = Date.parse(joiningDateValue);
    if(joiningDate < dob){
        alert("Date of joining cannot be before Date of birth")
        return
    }

    if(salaryValue < 0){
        alert("Salary cannot be less than 0")
        return
    }
    registrationForm.reset()
    alert("Registration successful!!");
});