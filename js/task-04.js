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


/* 
const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const onClickbuttonDecrement = buttonDecrement.addEventListener('click', () => {counterValue.textContent = Number(counterValue.textContent) - 1} );

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const onClickbuttonIncrement = buttonIncrement.addEventListener('click', () => {counterValue.textContent = Number(counterValue.textContent) + 1} );
 */
