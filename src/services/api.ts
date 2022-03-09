import axios from 'axios';
import store from '../store';

// const baseURL = process.env.REACT_APP_URL_API;
const api = axios.create({
  baseURL: 'http://localhost:4000',
});

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     const originalRequest = error.config;

//     return Promise.reject(error);
//   },
// );

// api.interceptors.request.use(config => {
//   const newConfig = config;
//   const { auth } = store.getState();

//   if (auth && auth.id_token) {
//     newConfig.headers.Authorization = `Bearer ${auth.id_token}`;
//   }

//   return newConfig;
// });

export default api;
