const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const guest = ({ currentTarget }) => {
    
    if (currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = currentTarget.value;
    }
};

nameInput.addEventListener("input", guest);


