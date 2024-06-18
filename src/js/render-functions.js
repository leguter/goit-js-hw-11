import { searchImg } from "./pixabay-api"
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
export function createElements(values, container) {
    console.log(values);
       const markup = values.hits
    .map(value => {
      return `<li>
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
    container.textContent = '';
    container.insertAdjacentHTML('beforeend', markup)
 }