import axios from 'axios'

import { FETCH_USERS } from './types'

const ROOT_URL = 'http://localhost:3090'

export function signInUser({ email, password }) {
  return function () {
    axios.post(`${ ROOT_URL }/signin`, { email, password })
  }
}

export function fetchUsers () {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}
