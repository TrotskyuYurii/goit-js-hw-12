//++імпорт модулів
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//++simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//++import axios
import axios from 'axios';




const myForm = document.querySelector('form');
const messageLoad = document.getElementById('searchImageText');
const container = document.querySelector('.container-image');
const loadMoreButton = document.getElementById('loadMoreButton');
let currentPages = 1;
let imageArray;
let totalHits=0;
let inputValue='';
let galleryDll;

//Запускаємо галерею після заванатаження сторінки
document.addEventListener('DOMContentLoaded', function() {
  openLightbox();
});
//--


//++loadMoreButton
loadMoreButton.addEventListener('click', event => {

  const galleryCardHeight = document.querySelector('.photo-card').getBoundingClientRect().height;
  currentPages += 1;

  showHidemessageLoad();
  

  getImage(inputValue)
  .then(posts => {
    imageArray = posts;
    if (imageArray.length === 0) {
      showHidemessageLoad();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      render();
      loadMoreButton.classList.add('isHidden');
    } else {
      showHidemessageLoad();
      loadMoreButton.classList.remove('isHidden');
      imageArray.push(...posts);
      render(true);
      controlEndsOfImage();
      // openLightbox();
      galleryDll.refresh();

      window.scrollBy({
        top: galleryCardHeight * 2,
        behavior: 'smooth'
      });

    }
  })

});
//--



//++myForm
myForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = document.getElementById('searchImage');
  inputValue = searchInput.value;

  if (inputValue.trim() === '') {
    iziToast.info({
      message: 'Please enter what you want to find!',
      position: 'topRight',
    });
    return;
  } else {
    currentPages = 1;
    showHidemessageLoad();
    getImage(inputValue)
      .then(posts => {
        imageArray = posts;
        if (imageArray.length === 0) {
          showHidemessageLoad();
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          render();
          loadMoreButton.classList.add('isHidden');
        } else if (totalHits <= 15) {
          showHidemessageLoad();
          render();
          loadMoreButton.classList.add('isHidden');
          // openLightbox();
          galleryDll.refresh();

          iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
          });
          return;
        } else {
          showHidemessageLoad();
          loadMoreButton.classList.remove('isHidden');
          render();
          // openLightbox();

          galleryDll.refresh();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
});
//--

//++pixabay
async function getImage(inputValue) {

  const API_KEY = '25736683-f5d7a17cce89782c978955728';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(inputValue) +
    '&image_type=photo&orientation=horizontal&safe_search=true&page='+currentPages+'&per_page=15&';

  const response = await axios.get (URL, );
  totalHits = response.data.totalHits;
  return response.data.hits;

}
//--

//++Керування відображенням напису завантаження
function showHidemessageLoad() {
  messageLoad.classList.toggle('isHidden');
}
//--



//++Рендер структури галереї 
function productTemplate(item) {

  return `<div class="photo-card">
    <a href="${item.largeImageURL}" class="gallery-link">
      <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" class="gallery-image" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b> ${item.likes}
      </p>
      <p class="info-item">
        <b>Views:</b> ${item.views}
      </p>
      <p class="info-item">
        <b>Comments:</b> ${item.comments}
      </p>
      <p class="info-item">
        <b>Downloads:</b> ${item.downloads}
      </p>
    </div>
  </div>`;

}

function productListTemplate() {
  return imageArray.map(productTemplate).join('');
}

function render(addMore = false) {
  const markup = productListTemplate();

  if (addMore) {
    container.insertAdjacentHTML('beforeend', markup);
  } else  {
  container.innerHTML = markup;
}

}
//--

function controlEndsOfImage() {
  if (imageArray.length === totalHits) {
    loadMoreButton.classList.add('isHidden');
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
}


//++Підключення Lightbox
function openLightbox() {

  let options = {
    captionsData: 'alt',
    captionDelay: 250,
    captions: true,

  };

  galleryDll = new SimpleLightbox('.container-image a', options);
  galleryDll.on('show.simplelightbox', function () {});
  galleryDll.refresh();
}
//--