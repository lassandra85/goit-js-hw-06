const inputControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


const changeSizeText = (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
inputControl.addEventListener("input", changeSizeText);