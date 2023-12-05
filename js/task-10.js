
const refs = {
  controls: document.querySelector("#controls"),
  inputNumber: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
}

let sizeBox = 30;

/* const onBtnDestroyClick = () => {
  refs.boxes.innerHtml = "";
  sizeBox = 30;
}; */

refs.inputNumber.addEventListener("input", onInputNumberClick);
function onInputNumberClick(event) {
  const amount = event.currentTarget.value;
  let markup = [];
  for (let i = 0; i < amount; i += 1) {
    markup = '<div></div>';
    
  }
};

refs.btnCreate.addEventListener("click", () => {
  createBoxes(amount);
});

/* refs.btnDestroy.addEventListener("click", onBtnDestroyClick); */


function createBoxes() {
    const boxColor = getRandomHexColor();
    
    const markup = '<div></div>';
    refs.boxes.innerHtml = markup;
    
    /* `${30+(i-1)*10}px` */
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
