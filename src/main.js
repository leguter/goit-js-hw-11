import iziToast from "izitoast";
 import "izitoast/dist/css/iziToast.min.css";
import { searchImg } from './js/pixabay-api.js';
import { createElements } from "./js/render-functions.js";
const inputEl = document.querySelector('.input-search');
const btnEl = document.querySelector('.btn-search');
const formEl = document.querySelector('.form-el')
const listEl = document.querySelector('.img-list')
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = formEl.elements[0].value.trim();
    if (!value) {
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    } else {
        searchImg(value,listEl);
    }
})