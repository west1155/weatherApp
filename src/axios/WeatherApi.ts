import axios from "axios";


export const weatherApi = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/current.json?',
    params: {
        key: 'e9085857356649e5a02122632231411', // API key
    }
});





