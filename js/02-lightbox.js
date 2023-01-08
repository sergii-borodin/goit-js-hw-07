import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const items = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join(" ");

const galleryList = document.querySelector(".gallery");
const options = {
    captionsData: "alt",
    captionsDelay: 250
}

galleryList.insertAdjacentHTML('beforeend', items);


 new SimpleLightbox('.gallery a', options);
