import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const marCupGallery = galleryMarcup();

galleryRef.insertAdjacentHTML('beforeend', marCupGallery);

function galleryMarcup() { 
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `
   }).join('')
};

let img = ''

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

gallery.on('show.simplelightbox', function (e) {
	img = `<img = "${e.target.dataset.source}">`
});


