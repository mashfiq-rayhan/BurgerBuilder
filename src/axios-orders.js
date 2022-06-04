import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newburger-20616-default-rtdb.firebaseio.com/'
});

export default instance;