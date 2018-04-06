import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import Async from './middlewares/async'

import App from './components/App';
import SignIn from './components/auth/SignIn'

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="signin" component={ SignIn }/>
      </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
