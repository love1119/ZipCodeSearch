import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

import {constants as zipConstants} from '../actions/ZipActions';

import {RootState} from '../types';

export const reducers = {
  [zipConstants.SET_ZIP_INFO]: (
    state: RootState,
    {payload}: {payload: any},
  ) => {
    return state.merge({
      zipInfo: payload.zipInfo,
      loading: payload.loading,
      error: payload.error,
    });
  },
};

export const initialState = () =>
  Map({
    loading: false,
    error: null,
    zipInfo: {},
  });

export default handleActions(reducers, initialState());
