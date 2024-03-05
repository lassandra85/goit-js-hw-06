/* const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const onClickbuttonDecrement = buttonDecrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const onClickbuttonIncrement = buttonIncrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}); */

class Counter {
  constructor(selector, step, initialValue) {
    this.counterContainer = document.querySelector(selector);
    this.step = step;
    this.initialValue = initialValue;
  }

  addListeners() {
    const increment = this.counterContainer.querySelector(
      '[data-action="increment"]'
    );
    const decrement = this.counterContainer.querySelector(
      '[data-action="decrement"]'
    );
    const span = this.counterContainer.querySelector("#initialValue");
    span.textContent = this.initialValue;
  }
}
