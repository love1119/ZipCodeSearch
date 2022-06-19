import {ZipResult} from '../types';

export interface ZipState {
  loading: boolean;
  error: string;
  zipInfo: ZipResult;
}

export interface RootState {
  zip: ZipState;
}
