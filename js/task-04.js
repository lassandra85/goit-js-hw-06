const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

const handleDecrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

const handleIncrement = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}


btnDecrement.addEventListener("click", handleDecrement);
btnIncrement.addEventListener("click", handleIncrement);

