// import fetchImage from './js/pixabay-api.js';
// import RenderImg from './js/render-functions.js';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const imgList = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');

searchForm.addEventListener('click', async e => {
  e.preventDefault();
  console.log('hellow');
  try {
    const gallery = await fetchImage(parametersObject);
    const markup = RenderImg(gallery.hits);
    console.log('markup', markup);
    imgList.insertAdjacentHTML('beforeend', insertGallery(markup));
    // imgList.insertAdjacentHTML('beforeend', insertGallery(markup));
  } catch (error) {
    console.log(error);
  }
});

function insertGallery() {
  const galleryInner = new SimpleLightbox('.gallery a', {
    animationSpeed: 300,
    animationSlide: true,
    captionDelay: 250,
    overlay: true,
    overlayOpacity: 0.8,
  });
  galleryInner.on('shown.simplelightbox', () => {
    const lightboxContainer = document.querySelector('.simple-lightbox');
    const slClouse = lightboxContainer.firstElementChild;
    if (!lightboxContainer) return;
    const slNavigationBtn = document.querySelectorAll('.sl-navigation button');
    const slCounter = document.querySelector('.sl-counter');
    Object.assign(slClouse.style, lightboxStyle.slClouse);
    slNavigationBtn.forEach(item => {
      Object.assign(item.style, lightboxStyle.slNavigationBtn);
      item.className === 'sl-prev'
        ? Object.assign(item.style, lightboxStyle.slPrev)
        : null;
      item.className === 'sl-next'
        ? Object.assign(item.style, lightboxStyle.slNext)
        : null;
    });
    Object.assign(slCounter.style, lightboxStyle.slCounter);
  });
}
