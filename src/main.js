import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 import { createElements } from "./js/render-functions.js";
import { searchImg } from './js/pixabay-api.js';
const formEl = document.querySelector('.form-el');
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = formEl.elements[0].value.trim();
    if (!value) {
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    } else {
        
        searchImg(value)
            .then(data => {
                console.log(data);
        if (data.length === 0) {
            throw new Error('Error! Nothing to load');
        } else {
        createElements(data)
        }
    }).catch(error => {
        iziToast.error({
            title: 'Sorry,',
            message: 'there are no images matching your search query. Please try again!',
            color: 'red',
        })
    }); 
    }
});