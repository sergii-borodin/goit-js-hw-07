const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const ulListRef = document.querySelector('ul');
console.log(ulListRef);

const createItemByInsertAdjacentHTML = ({ url, alt }) => {
    const imgItemRef = document.createElement('li');

        imgItemRef.insertAdjacentHTML('beforeend', `<img src="${url}" alt="${alt}"></img>`);
    return imgItemRef;

}

//console.log(createImgByInsertAdjacentHTML(images[1]));

const gallery = images.map(createItemByInsertAdjacentHTML);
console.log(gallery);

ulListRef.append(...gallery);
//ulListRef.insertAdjacentHTML('beforeend', `<li><img src="${images[0].url}" alt="${images[0].alt}"></img></li>` );

//const ulList = document.createElement('ul');


// function createGallery(images) {

//   return images.forEach (function (image){
//         const imgRef = document.createElement('img');
//         imgRef.setAttribute('image.url','image.alt');

//         const liItemRef = document.createElement('li');
//         liItemRef.appendChild(imageRef);

//         // liItem.insertAdjacentHTML('beforeend', url);
//         // liItem.insertAdjacentHTML('beforeend', alt);
//         imageRef.appendChild(liItemRef);
//   });
  // versiya so strelkoy   orderedItems.forEach ((orderedItem) => totalPrice += orderedItem);
 
  
//}

// const createLiArray = images => {
//     return images.map(({ url, alt }) => {
//         const imgRef = document.createElement('img');
//         imgRef.src = url;
//         imgRef.alt = alt;
//         imgRef.width = 500;

//         const liItemRef = document.createElement('li');
//         liItemRef.appendChild(imgRef);
        
//         // liItem.insertAdjacentHTML('beforeend', url);
//         // liItem.insertAdjacentHTML('beforeend', alt);
        
//         return liItemRef;
    
//     });

// }

// const liItemArray = createLiArray(images);
// console.log(liItemArray);

// ulListRef.append(...liItemArray);
