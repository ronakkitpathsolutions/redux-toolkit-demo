import axios from "axios";
import { METHODS } from "../constant";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // Replace with your API base URL
    timeout: 1000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',

    }
})

api.interceptors.request.use(
    (config) => {
        // Add any custom logic before sending the request
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
)
api.interceptors.response.use(
    (response) => {
        // Handle the response data
        return response.data;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
)

export const setHeaders = (key = '', value) => {
    api.defaults.headers[key] = value;
}


const client = ({ method = METHODS.GET, url = '', withCredentials = false, auth, data, ...otherParams }) => {
    return api({
        method,
        url,
        withCredentials,
        auth,
        data,
        ...otherParams
    });
}

export default client;