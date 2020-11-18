import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const middleware = [thunkMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middleware))
      : composeWithDevTools(applyMiddleware(...middleware));
  return createStore(reducer, enhancer);
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
