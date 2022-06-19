import {AxiosResponse} from 'axios';
import {apiClient} from './apiClient';

export const getZipInfoAPI = (zip: string): Promise<AxiosResponse<any, any>> =>
  apiClient.get(`/${zip}`);
