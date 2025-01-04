import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {ErrorData} from '../types/error-data.ts';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.CONFLICT]: true,
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorData>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        toast.warn(detailMessage.message);
      }

      if (error.response && error.response.status >= 500) {
        toast.error(`Status code ${error.response.status}. Some problems on server side. ${error.response.data.message}`);
      }

      throw error;
    }
  );

  return api;
};
