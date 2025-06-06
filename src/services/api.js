import axios from 'axios';

const api = axios.create({
  baseURL: 'http://http://192.168.15.103:8080',
});

export default api;
