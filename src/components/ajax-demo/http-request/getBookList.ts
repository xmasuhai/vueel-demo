import axios from 'axios';

export const getBookList = () => {
  return axios.get(
    '/api/getbooks',
    {
      baseURL: 'http://www.liulongbin.top:3006'
    });
};
