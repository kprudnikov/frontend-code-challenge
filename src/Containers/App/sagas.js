import { call, put, takeLatest } from 'redux-saga/effects';
import { getAds } from '../../api';
import { LOAD_ADS_LIST_SEND } from './constants';

import {
  setLoader,
  setErrorMessage,
  loadAdsListSuccess,
} from './actions';

function* getRentals() {
  try {
    yield put(setLoader(true));
    const list = yield call(getAds);
    yield put(loadAdsListSuccess(list));
    yield put(setLoader(false));
  } catch (e) {
    const message = e.message || 'Something went wrong';
    yield put(setLoader(false));
    yield put(setErrorMessage(message));
  }
}

const sagasCombiner = [
  { signal: LOAD_ADS_LIST_SEND, saga: getRentals },
];

export default function sagasHandler() {
  return sagasCombiner.map(el =>
    function* () { // eslint-disable-line func-names
      yield takeLatest(el.signal, el.saga);
    });
}
