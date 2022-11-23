const loginForm = document.querySelector(".login-form");
const form = {};

loginForm.addEventListener("submit", submitForm); 

function submitForm(event) {
    event.preventDefault();

    const {email, password } = event.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } /* else {
        form.email = email.value;
        form.password = password.value;
    } */

    /* console.log(form); */
    event.currentTarget.reset();
}   
