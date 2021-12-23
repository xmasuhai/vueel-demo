import axios from 'axios';

axios.defaults.baseURL = 'http://www.liulongbin.top:3006/';

export const addBook = (paramsData: Record<string, string>) => {
  // 发送添加书本信息请求
  return axios.post('/api/addbook',
    paramsData,
    {
      timeout: 0
    }
  );
};

export const delBook = (paramsData: Record<string, string>) => {
  return axios.get(
    '/api/delbook',
    {
      params: paramsData
    });
};

export const getBookList = () => {
  return axios.get(
    '/api/getbooks',
    {});
};

export const getBook = (id: number, bookname?: string) => {
  return axios.get(
    '/api/getbooks',
    {
      params : {
        id: `${id}`,
        bookname: bookname
      }
    });
};
