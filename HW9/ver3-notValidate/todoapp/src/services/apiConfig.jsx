import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.response.use(function (response) {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default api;
