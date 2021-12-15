import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarcup = createGalleryMarcup();

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup);
galleryRef.addEventListener('click', createOpenModaImg);
galleryRef.addEventListener('keydown', onCloseModal);

function createGalleryMarcup() { 
  return  galleryItems.map(({ preview, original, description }) => 
   `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
    `
    ).join('')
};

let img = ""

function createOpenModaImg(evt) { 
  evt.preventDefault();
  img = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  img.show()
};

function onCloseModal(evt) { 
  if (evt.code === "Escape") { 
    img.close()
  }
};


 