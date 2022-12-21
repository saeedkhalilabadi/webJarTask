import axios from 'axios';


const baseURL = 'https://challenge.webjar.ir';


const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;