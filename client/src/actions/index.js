import axios from 'axios'
import { browserHistory } from 'react-router'

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_USERS } from './types'

const ROOT_URL = 'http://localhost:3090'

export function signUpUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ ROOT_URL }/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/users')
      }).catch(error => {
        dispatch(authError(error.response.data.error))
      })
  }
}

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ ROOT_URL }/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/users')
      }).catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signOutUser() {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}

export function authError (error) {
  return { type: AUTH_ERROR, payload: error }
}

export function fetchUsers () {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}
