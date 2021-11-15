import axios from 'axios';
import { getAuth } from 'firebase/auth';
import config from '../config';

const API = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

API.interceptors.request.use(
  async (axiosRequestConfig) => {
    const token = await getAccessToken();
    if (token && axiosRequestConfig.headers) {
      axiosRequestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return axiosRequestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getAccessToken = async () => {
  const user = getAuth().currentUser;
  if (user) {
    return user.getIdToken();
  }
  return null;
};

export default API;
