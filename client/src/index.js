import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import Async from './middlewares/async'
import { AUTH_USER } from './actions/types'

import RequireAuth from './components/HOC/RequireAuth'
import App from './components/App';
import Welcome from './components/Welcome'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import UserList from './components/UserList'

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Welcome }/>
        <Route path="signup" component={ SignUp }/>
        <Route path="signin" component={ SignIn }/>
        <Route path="signout" component={ SignOut }/>
        <Route path="users" component={ RequireAuth(UserList) }/>
      </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
