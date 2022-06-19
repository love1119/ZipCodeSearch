import {all} from 'redux-saga/effects';

import {zipSaga} from './zipSaga';

export default function* sagas() {
  yield all([...zipSaga]);
}
