import api from './api';

import Modal from '../components/modal';

const graphql = async (query: string) => {
  try {
    return api
      .post('/', {
        query,
      })
      .then(response => {
        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        return response.data || response;
      })
      .catch(error => {
        Modal({ keyType: error.message, icon: 'error' });

        throw new Error(error.message);
      });
  } catch (error: any) {
    Modal({ keyType: error.message, icon: 'error' });

    throw new Error(error.message);
  }
};

export default graphql;