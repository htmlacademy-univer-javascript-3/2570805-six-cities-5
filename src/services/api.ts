import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      // const token = getToken();
      const token = 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

      if (token && config) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};
