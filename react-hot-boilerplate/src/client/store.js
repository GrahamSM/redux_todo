import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import data

// create object for default data
const defaultState = {};

const store = createStore(rootReducer,
  defaultState);

export const history = syncHistoryWithStore(
  browserHistory, store);

export default store;

//Store holds the state of the application at any point in time!
