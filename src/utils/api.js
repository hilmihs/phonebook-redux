import axios from "axios";

let cancel;

export const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    //headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}` }
})

