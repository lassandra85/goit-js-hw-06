const loginForm = document.querySelector(".login-form");
const form = {};

loginForm.addEventListener("submit", submitForm); 

function submitForm(event) {
    event.preventDefault();

    const {email, password } = event.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } 
    event.currentTarget.reset();
}   
