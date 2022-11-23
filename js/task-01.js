const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);


for (const category of categoriesAll) {
    const categoryFirstElementChild = category.firstElementChild;
    console.log(`Category: ${categoryFirstElementChild.textContent}`);
    const categoryLastElementChild = category.lastElementChild;
    const categoryLastElementChildChildren = categoryLastElementChild.children;
    console.log(`Elements: ${categoryLastElementChildChildren.length}`);
}
