import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarcup = createGalleryMarcup();

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup);
galleryRef.addEventListener('click', onOpenModalImg);
// galleryRef.addEventListener('keydown', onKeyPress);


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

function onOpenModalImg(evt) { 
  evt.preventDefault();
  
  window.addEventListener('keydown',onEscKeyPress)
  const currentImg = evt.target.dataset.source;

  if (!currentImg) { 
    return;
  }
  img = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`);
  img.show()
};

function onCloseModal() { 
  window.removeEventListener('keydown',onEscKeyPress)
};

function onEscKeyPress(evt) { 
  const ESC_KEY_CODE = 'Escape';
  
  if (evt.code === ESC_KEY_CODE) {
    onCloseModal()
  }
  img.close()
 
  console.log(evt)
}
 