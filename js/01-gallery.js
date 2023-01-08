import { galleryItems } from './gallery-items.js';
// Change code below this line

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


const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML('beforeend', items);

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt){
    evt.preventDefault();
    console.log(evt.target.nodeName)

    if (evt.target.nodeName !== "IMG"){
        return;
    }

    modalOpen(evt)
}

function modalOpen(evt){
    const largeImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source
        }" width="800" height="600">
`, {
        onShow: () => { document.addEventListener("keydown", onEscPress) },
        onClose: () => { document.removeEventListener("keydown", onEscPress) }
    });

    largeImg.show();

function onEscPress() {
    if (evt.key !== "Escape") {
        return;
    }
    largeImg.close();
    
}


}
