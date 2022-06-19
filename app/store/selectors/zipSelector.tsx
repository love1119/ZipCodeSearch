import {createSelector} from 'reselect';

import {RootState} from '../types';

const zipDataSelector = (state: RootState) => state.zip;

const resultSelector = createSelector(zipDataSelector, (payload: any) => ({
  isLoading: payload.loading,
  error: payload.error,
  zipInfo: payload.zipInfo,
}));

export const zipSelector = (state: RootState) => ({
  ...resultSelector(state),
});
