var messagebox = document.getElementById("messagebox");
var firstName = document.getElementById("firstName"); 
var lastName = document.getElementById("lastName");
var company = document.getElementById("company");
var inputEmail = document.getElementById("inputEmail");
var inputPhone = document.getElementById("inputPhone");
var submitButton = document.getElementById("submitButton");

function emptyFields(){
    if(firstName.value == ""){
        alert("Enter your first name");
    };

    if(lastName.value == ""){
        alert("Enter your last name");
    };

    if(company.value == ""){
        alert("Enter your company name");
    };

    if(inputEmail.value == ""){
        alert("Enter your email address");
    };

    if(inputPhone.value == ""){
        alert("Enter your phone number");
    };

    if(inputPhone.value.length < 10){
        alert("Invalid Phone Number")
    };

    if(messagebox.value == ""){
        alert("Enter some information in the message box");
    };

};

submitButton.addEventListener('click', emptyFields);


