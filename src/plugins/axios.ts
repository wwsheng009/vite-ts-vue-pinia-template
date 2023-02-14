import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
// api
const apiHost = '/api'; // 接口地址
const service = axios.create({
  // 当前环境为线上时，自动使用production环境变量里的VUE_APP_API_BASE_URL线上接口地址
  baseURL:
    import.meta.env.MODE === 'production'
      ? import.meta.env.VUE_APP_API_BASE_URL
      : apiHost,
  timeout: 60000,
});

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    console.log(response);
    // do something
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
