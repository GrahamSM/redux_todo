// In redux, we can only really have 'one' reducer
// So, we write a reducer for each part of state
// And then, put them into our root reducer


import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';

const rootReducer = combineReducers({todos, routing: routerReducer });

export default rootReducer;
