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

  const currentImg = evt.target.dataset.source;
  if (!currentImg) { 
    return;
  }
  img = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`);
  img.show()
};

function onCloseModal(evt) {
  const onClickEscape = evt.target.dataset.source.code;
  if (onClickEscape === "Escape") { 
    img.close()
  }
};


 