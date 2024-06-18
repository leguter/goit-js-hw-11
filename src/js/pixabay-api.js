import iziToast from "izitoast";
 import "izitoast/dist/css/iziToast.min.css";
export function searchImg(img) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/'
    const options = new URLSearchParams({
        key: '44411802-6a5316a8fc33c8235d915a6fe',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q:`${img}`
    });
    const url = `${baseUrl}${endPoint}?${options}`;
    return fetch(url).then(data => {
        if (!data.ok) {
        throw new Error(data.status);
        } else {
            return data.json();
    }
        
    }).then(value => {
        if (value.hits || value.length === 0) {
            throw new Error('Error! Nothing to load');
        } else {

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
});

    });
};
