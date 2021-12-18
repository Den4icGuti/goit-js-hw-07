import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarcup = createGalleryMarcup();

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup);
galleryRef.addEventListener('click', onOpenModalImg);

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
  console.log(img)
  img.show()
};

function onCloseModal() { 
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('click',onOpenModalImg)
};


function onEscKeyPress(evt) { 
  const ESC_KEY_CODE = 'Escape';
  
  if (evt.code === ESC_KEY_CODE) {
    onCloseModal()
  }
   
  img.close()
 console.log(evt)
}
 