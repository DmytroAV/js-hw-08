import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from '../images/gallery-items.js';
import '../css/_common.css';
import '../css/gallery.css';

const arrayGallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
arrayGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryItemsMarkup(items) {
  return items.map(({ original, preview, description }) => {
    return `
                <div class="gallery__item">
                        <a class="gallery__link" href=${original}>
                           <img
                                class="gallery__image"
                                src=${preview}
                                data-source=${original}
                                alt=${description}
                            />
                        </a>
                </div>
                `
  }).join('')
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});