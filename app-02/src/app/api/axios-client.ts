import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3200',
});

export const getAxiosData = (url: string, data?: any) => {
  return axiosInstance.get(url, {
    params: new URLSearchParams(data ? data : ''),
  });
};
