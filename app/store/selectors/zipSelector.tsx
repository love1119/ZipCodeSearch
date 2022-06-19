import {createSelector} from 'reselect';

import {RootState} from '../types';

const zipDataSelector = (state: RootState) => state.zip;

const resultSelector = createSelector(zipDataSelector, (payload: any) => ({
  isLoading: payload.get('loading'),
  error: payload.get('error'),
  zipInfo: payload.get('zipInfo'),
}));

export const zipSelector = (state: RootState) => ({
  ...resultSelector(state),
});
