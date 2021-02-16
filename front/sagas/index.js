import {
  all,
  fork,
  call,
  take,
  takeEvery,
  takeLatest,
  throttle,
  put,
  delay,
  debounce,
  takeLeading,
  takeMaybe,
} from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8182';
axios.defaults.withCredentials = true; // cookie 전달 허용

import userSaga from './user';
import postSaga from './post';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]); // all 동시 실행
}
