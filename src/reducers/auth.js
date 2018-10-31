import { SET_AUTH_STATUS, SET_AUTH_ACCESS_TOKEN } from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS: 
      return { ...state, status: action.status }
    case SET_AUTH_ACCESS_TOKEN: 
      return { ...state, accessToken: action.accessToken }
    default: 
      return state
  }
}

export default auth