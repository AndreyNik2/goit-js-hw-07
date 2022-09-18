import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery')

const newGalleryElementMarkup = ({ preview, original, description }) => {
    return `<div class="gallery__item">
	<a class="gallery__link" href='${original}'
		><img class="gallery__image" src='${preview}' alt='${description}' data-source='${original}'
	/></a>
</div>`
}
const makeGalleryElements = galleryItems.map(newGalleryElementMarkup).join('')

galleryRef.insertAdjacentHTML('beforeend', makeGalleryElements)


galleryRef.addEventListener('click', openModal)

function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
    `)

    instance.show()
    
    if (instance.show()) {
       galleryRef.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close()
        }
    }) 
    } 
}

