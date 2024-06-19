import { createElements } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 const loaderEl = document.querySelector('.span')
export function searchImg(value) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/'
    const options = new URLSearchParams({
        key: '44411802-6a5316a8fc33c8235d915a6fe',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q:`${value}`,
    });
    const url = `${baseUrl}${endPoint}?${options}`;
     fetch(url).then(data => {
        if (!data.ok) {
        throw new Error(data.status);
        } else {
            return data.json();
    }
        
    }).then(value => {
        if (value.length === 0) {
            throw new Error('Error! Nothing to load');
        } else {
        createElements(value)
        }
        // if (data === 0) {
        //     iziToast.show({
        //         message: 'Sorry, there are no images matching your search query. Please, try again!',
        //         messageColor: '#fafafb'
        //     });
        // }
    }).catch(error => {
        iziToast.error({
            title: 'Sorry,',
            message: 'there are no images matching your search query. Please try again!',
            color: 'red',
        })
    });
};
