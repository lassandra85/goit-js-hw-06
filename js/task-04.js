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

    this.incrementBtn = this.counterContainer.querySelector(
      '[data-action="increment"]'
    );
    this.decrementBtn = this.counterContainer.querySelector(
      '[data-action="decrement"]'
    );
    this.spanRef = this.counterContainer.querySelector("#initialValue");
    this.step = step;
    this.initialValue = initialValue;
  }

  addListeners() {
    this.spanRef.textContent = this.initialValue;
    this.incrementBtn.addListeners("click", this.handleIncrement);
    this.decrementBtn.addListeners("click", this.handleDecrement);
  }
}
