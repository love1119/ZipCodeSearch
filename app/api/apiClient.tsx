import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.zippopotam.us/us',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export {apiClient};
