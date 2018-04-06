import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import usersReducer from './users'
import authReducer from './auth'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  users: usersReducer
});

export default rootReducer;
