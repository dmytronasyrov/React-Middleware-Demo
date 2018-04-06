import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import usersReducer from './users'

const rootReducer = combineReducers({
  form,
  users: usersReducer
});

export default rootReducer;
