import iziToast from "izitoast";
 import "izitoast/dist/css/iziToast.min.css";
import { searchImg } from './js/pixabay-api.js';
import { createElements } from "./js/render-functions.js";
const inputEl = document.querySelector('.input-search');
const btnEl = document.querySelector('.btn-search');
const formEl = document.querySelector('.form-el')
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formEl.elements[0].value.trim()) {
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    } else {
        searchImg(inputEl.value.trim());
        createElements();
    }
})