const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const ulList = document.querySelector('ul');
console.log(ulList);

const createListOfIngredients = ingredients => {

    return ingredients.forEach((ingredient) => {
        const liItem = document.createElement('li');
        liItem.textContent = ingredient;
        ulList.appendChild(liItem);
    })

}



console.log(createListOfIngredients(ingredients));

