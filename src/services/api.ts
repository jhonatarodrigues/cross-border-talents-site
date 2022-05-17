import axios from 'axios';
import store from '../store';

import { loadSuccess, loadLogout } from '../store/ducks/auth/actions';

const baseURL = process.env.REACT_APP_URL_API || '';

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  response => {
    const originalRequest = response.config;

    if (
      response &&
      response.data &&
      response.data.errors &&
      response.data.errors.length > 0
    ) {
      const typeError = response.data.errors[0].message;
      if (typeError === 'invalidToken' || typeError === 'tokenExpired') {
        const { refreshToken } = store.getState().auth;

        return new Promise((resolve, reject) => {
          const query = `
            mutation {
              refreshToken(refreshToken: "${refreshToken}") {
                token
                refreshToken
                user{
                  id
                  name
                  phone
                }
              }

            }
          `;
          axios
            .post(baseURL, {
              query,
            })
            .then(({ data }) => {
              store.dispatch(loadSuccess(data.data.refreshToken));
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${data.data.refreshToken.token}`;
                resolve(axios(originalRequest));
              }
            })
            .catch(error => {
              // processQueue(err, null);
              if (error.message.indexOf('refreshToken') > -1) {
                store.dispatch(loadLogout());
                return;
              }

              reject(error);
            });
        });
      }
      if (typeError === 'refreshTokenExpired') {
        console.log('refresh token expired');
      }
    }

    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.request.use(config => {
  const newConfig = config;
  const { auth } = store.getState();

  if (auth && auth.token && newConfig && newConfig.headers) {
    newConfig.headers.Authorization = `Bearer ${auth.token}`;
  }

  return newConfig;
});

export default api;
