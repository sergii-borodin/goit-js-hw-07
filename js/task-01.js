const ulRef = document.querySelector('ul');
console.log(ulRef);

const liRef = document.querySelectorAll('.item');

const countCategories = () => {
    return `В списке ${liRef.length} категории.`
}

console.log(countCategories());

const headerCategoriesRef = document.querySelectorAll('h2');
//console.log(headerCategoriesRef);

const getNameOfCategoriesAndAmountElements = headerCategoriesRef => {
    return headerCategoriesRef.forEach((element, index1) => {
        console.log('Категория:', element.textContent);
        const liEl = document.querySelectorAll('.listCategory');
        liEl.forEach((ul, index2) => {
            if (index1 === index2) {
                console.log('Количество элементов:', ul.children.length);
            }
        });

    })

}

console.log(getNameOfCategoriesAndAmountElements(headerCategoriesRef));



































// const categoriesEl = document.querySelector('ul');
// //console.log('categoriesEl', categoriesEl);

// const categoriesItemEl = document.querySelectorAll('li.item');
// //console.log('categoriesItemEl',categoriesItemEl);

// const countCategories = categoriesEl => {
//     return `В списке ${categoriesItemEl.length} категории.`;
// }

// console.log(countCategories(categoriesItemEl));

// const headerEls = document.querySelectorAll('h2');
// //console.log('текст заголовка элемента', headerEls);

// const headerEl = categoriesEl.firstElementChild;
// //console.log(headerEl.textContent);

// const categoriesItemEl2 = document.querySelector('li.item');
// console.log('categoriesItemEl', categoriesItemEl2);

// const firstHeaderEl = categoriesItemEl2.firstElementChild;
// console.log('Категория:', firstHeaderEl.textContent);

// const secondElInFirstCategorie = document.querySelectorAll();

 //const countOfElInFirstCategorie = 

// const headerElements = document.querySelectorAll('h2');
// console.log('headerElements', headerElements);

// const showTextContentOfAllHeaderElements = headerEl => {
//     return headerEl.forEach((headerElement) => headerElement.textContent);
// }
//  console.log(showTextContentOfAllHeaderElements(headerEl));


