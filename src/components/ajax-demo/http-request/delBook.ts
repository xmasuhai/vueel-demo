import axios from 'axios';

export const delBook = (paramsData: Record<string, string>) => {
  return axios.get(
    '/api/delbook',
    {
      baseURL: 'http://www.liulongbin.top:3006',
      params: paramsData
    });
};