import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')

const newGalleryElementMarkup = ({ preview, original, description }) => {
    return `<li>
	<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
</li>`
}
const makeGalleryElements = galleryItems.map(newGalleryElementMarkup).join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryElements);

var lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'alt',
        captionDeley: 250,
        fadeSpeed: 250,
    });
