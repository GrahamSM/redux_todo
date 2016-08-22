// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './client/components/App';
import ToDoList from './client/components/ToDos/ToDoList';


// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './client/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={ToDoList}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
