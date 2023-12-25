
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS } from './action';

function* fetchData() {
  try {
    yield put({ type: FETCH_DATA_START });
    const response = yield call(() =>
      axios.get('https://restcountries.com/v3.1/all') // Replace with your API endpoint
    );
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchData);
}