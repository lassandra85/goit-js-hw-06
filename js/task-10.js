
const refs = {
  controls: document.querySelector("#controls"),
  inputNumber: document.querySelector("input"),
  btnCreate: document.querySelector("/* button */[data-create]"),
  btnDestroy: document.querySelector("/* button */[data-destroy]"),
  boxes: document.querySelector("#boxes"),
}

let amount = 0;
const sizeBox = 30;

const onBtnDestroyClick = () => {
  refs.boxes.innerHtml = "";
};

refs.inputNumber.addEventListener("input", onInputNumberClick);

refs.btnCreate.addEventListener("click", () => {
  createBoxes(amount);
});

refs.btnDestroy.addEventListener("click", onBtnDestroyClick);

function onInputNumberClick(event) {
  amount = event.currentTarget.value;
};

function createBoxes() {
    const boxColor = getRandomHexColor();
    
    const markup = '<div></div>';
    refs.boxes.innerHtml = markup;
    
    `${30+(i-1)*10}px`
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
