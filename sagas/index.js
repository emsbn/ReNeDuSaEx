import {
  all,
  fork,
  call,
  take,
  put,
  delay,
  debounce,
  throttle,
  takeLatest,
  takeEvery,
  takeLeading,
  takeMaybe,
} from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // yield put({
    //   type: 'LOG_IN_REQUEST',
    // });
    const result = yield call(logInAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // yield put({
    //   type: 'LOG_OUT_REQUEST',
    // });
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI() {
  return axios.post('/api/post');
}

function* addPost(action) {
  try {
    // yield put({
    //   type: 'ADD_POST_REQUEST',
    // });
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  while (true) {
    yield take('LOG_IN_REQUEST', logIn);
  }
}

function* watchLogOut() {
  while (true) {
    yield take('LOG_OUT_REQUEST', logOut);
  }
}

function* watchAddPost() {
  while (true) {
    yield take('ADD_POST_REQUEST', addPost);
  }
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]); // all 동시 실행
}
