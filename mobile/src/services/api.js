import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.10.109:33333/',
    baseURL: 'http://192.168.10.109:3333/',
});

export default api;