import axios from 'axios';

export const addBook = (paramsData: Record<string, string>) => {
  // 发送添加书本信息请求
  return axios.post('/api/addbook',
    paramsData,
    {
      baseURL: 'http://www.liulongbin.top:3006/',
      timeout: 0
    }
  );
};