const categoriesEl = document.querySelector('ul');
console.log(categoriesEl);

const categoriesItemEl = document.querySelectorAll('.item');
console.log(categoriesItemEl);

const countCategories = categoriesEl => {
    return `В списке ${categoriesItemEl.length} категории.`;
}

console.log(countCategories(categoriesEl));


