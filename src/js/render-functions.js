import { searchImg } from "./pixabay-api"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// function imgTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
//     return `<li>
//     <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}"/>
//     <span>likes ${likes}</span>
//     <span>views ${views}</span>
//     <span>comments ${comments}</span>
//     <span>downloads ${downloads}</span>
//     </li>`
// }
// function imgsTemplate(arr) {
// return arr.map(imgTemplate).join('');
// }
const listEl = document.querySelector('.img-list')
export function createElements(values) {
    console.log(values);
       const markup = values.hits
    .map(value => {
      return `<li class="list-el">
                <a href="${value.largeImageURL}"><img src='${value.webformatURL}' alt='${value.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${value.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${value.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${value.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${value.downloads}</p></div>
                </div>
            </li>`;
    })
        .join('');
    listEl.textContent = '';
    listEl.insertAdjacentHTML('beforeend', markup);
    let gallery = new SimpleLightbox('.gallery a');
 }