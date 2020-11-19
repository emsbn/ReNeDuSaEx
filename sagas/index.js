import { all, fork, call, take, put } from 'redux-saga/effects';

function* watchLogIn() {
  yield take('LOG_IN');
}

function* watchLogOut() {
  yield take('LOG_OUT');
}

function* watchAddPost() {
  yield take('ADD_POST');
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]); // all 동시 실행
}
