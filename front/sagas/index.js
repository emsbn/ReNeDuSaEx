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

import userSaga from './user';
import postSaga from './post';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]); // all 동시 실행
}
