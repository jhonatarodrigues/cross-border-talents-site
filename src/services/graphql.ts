import api from './api';

const graphql = async (query: string) => {
  return api
    .post('/', {
      query,
    })
    .then(response => response.data || response);
};

export default graphql;
