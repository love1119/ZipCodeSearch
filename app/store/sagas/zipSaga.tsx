import {put, fork, takeLatest, call} from 'redux-saga/effects';

import {getZipInfoAPI} from '../../api/zip';

import {
  constants as zipConstants,
  actions as zipActions,
} from '../actions/ZipActions';

export function* searchZipInfo({payload}: {payload: any}) {
  yield put(
    zipActions.setZipInfo({
      loading: true,
      error: '',
      zipInfo: {},
    }),
  );

  console.log('**** payload ', payload);

  try {
    const response: any = yield call(getZipInfoAPI, payload);

    if (response.status === 200) {
      yield put(
        zipActions.setZipInfo({
          loading: false,
          error: '',
          zipInfo: response.data,
        }),
      );
    }
  } catch (err) {
    yield put(
      zipActions.setZipInfo({
        loading: false,
        error: 'Zip code invalid or not found',
        zipInfo: {},
      }),
    );
  }
}

function* watchZip() {
  yield takeLatest(zipConstants.GET_ZIP_INFO, searchZipInfo);
}

export const zipSaga = [fork(watchZip)];
