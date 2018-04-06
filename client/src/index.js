import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import Async from './middlewares/async'

import App from './components/App';
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import UserList from './components/UserList'

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="signup" component={ SignUp }/>
        <Route path="signin" component={ SignIn }/>
        <Route path="signout" component={ SignOut }/>
        <Route path="users" component={ UserList }/>
      </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
