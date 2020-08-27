import axios from 'axios';

export const axiosInstance = axios.create({});
export const handleAxiosToken = AUTH_TOKEN => {
  const token = 'Bearer ' + AUTH_TOKEN;

  axiosInstance.defaults.headers.common['Authorization'] = token;
};
