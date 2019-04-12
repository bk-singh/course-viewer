import { createStore } from "redux";

import rootReducer from './reducers/index';

const defaultState = { 
  courses: [],
};

const store = createStore(rootReducer, defaultState);

export default store;