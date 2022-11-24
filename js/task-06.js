const validationInput = document.querySelector("#validation-input");


const validation = (event) => {
    
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.add("invalid");
    }
}

validationInput.addEventListener("blur", validation);

