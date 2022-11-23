
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", () => {
  const bodyColor = getRandomHexColor();

  document.body.style.backgroundColor = bodyColor;
  spanColor.textContent = bodyColor;
});