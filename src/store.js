import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas/sagas'


const defaultState = {courses: [], authors: []};
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;