import axios from 'axios'
import { API_URL } from '../config'

export const api = axios.create({
    baseURL:API_URL,
});


// Add a request interceptor
api.interceptors.request.use(function (config) {
    if(document.getElementById('laoderSpinner').classList.value.indexOf('d-none') > 0 )
    {
        document.getElementById('laoderSpinner').classList.remove('d-none');
    }
    
    return config;
    },function (error) {  
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if(document.getElementById('laoderSpinner').classList.value.indexOf('d-none') <= 0  )
        {
            document.getElementById('laoderSpinner').classList.add('d-none');
        }
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
});
