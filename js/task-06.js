const validationInput = document.querySelector("#validation-input");


const validation = (event) => {
    
    if ( event.currentTarget.value.length >= validationInput.dataset.length) {
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
}

validationInput.addEventListener("blur", validation);

