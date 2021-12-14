import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforebegin',createImg)


const createImg = galleryItems.map(({ preview, original, description }) => { 
  
  return basicLinghtbox.create(`
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `)

}).join('')

