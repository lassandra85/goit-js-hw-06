const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul");
const arr = [];

for (let i = 0; i < ingredients.length; i += 1){
  const itemElement = document.createElement("li");
  itemElement.textContent = ingredients[i];
  itemElement.classList.add("item");
  arr.push(itemElement);
}

list.append(...arr);