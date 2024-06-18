import { searchImg } from "./pixabay-api"
searchImg().then(data => {
    const markup = imgsTemplate(data)
    
}) 

function imgTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `<li>
    <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}"/>
    <span>likes ${likes}</span>
    <span>views ${views}</span>
    <span>comments ${comments}</span>
    <span>downloads ${downloads}</span>
    </li>`
}
function imgsTemplate(arr) {
return arr.map(imgTemplate).join('');
}