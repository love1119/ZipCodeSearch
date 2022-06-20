import {handleActions} from 'redux-actions';

import {constants as zipConstants} from '../actions/ZipActions';

import {RootState} from '../types';

export const reducers = {
  [zipConstants.SET_ZIP_INFO]: (
    state: RootState,
    {payload}: {payload: any},
  ) => {
    return {
      ...state,
      zipInfo: payload.zipInfo,
      loading: payload.loading,
      error: payload.error,
    };
  },
};

export const initialState: any = () => ({
  loading: false,
  error: '',
  zipInfo: {},
});

export default handleActions(reducers, initialState());
