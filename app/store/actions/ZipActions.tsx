import {createAction} from 'redux-actions';

import {ZipResult} from '../../types';

const GET_ZIP_INFO = 'GET_ZIP_INFO';
const SET_ZIP_INFO = 'SET_ZIP_INFO';

export const constants = {
  GET_ZIP_INFO,
  SET_ZIP_INFO,
};

export interface SetZipInfoPayload {
  loading: boolean;
  error: string;
  zipInfo: ZipResult;
}

// -------------------------------
// Actions
// -------------------------------
export const getZipInfo = createAction(GET_ZIP_INFO, (zip: string) => zip);

export const setZipInfo = createAction(
  SET_ZIP_INFO,
  (payload: SetZipInfoPayload) => payload,
);

export const actions = {
  getZipInfo,
  setZipInfo,
};
