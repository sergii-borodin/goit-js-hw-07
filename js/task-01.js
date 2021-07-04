const ulRef = document.querySelector('ul');
console.log(ulRef);

const liRef = document.querySelectorAll('.item');

const countCategories = () => {
    return `В списке ${liRef.length} категории.`
}

console.log(countCategories());

const headerCategoriesRef = document.querySelectorAll('h2');
console.log(headerCategoriesRef);

const getNameOfCategories = headerCategoriesRef => {
    return headerCategoriesRef.forEach((element) => {
        console.log(element)
        const liOfCategorieRef = element.nextSibling;
        console.log(liOfCategorieRef);
    })

}

console.log(getNameOfCategories(headerCategoriesRef));



































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


