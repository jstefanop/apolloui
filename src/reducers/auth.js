import { SET_AUTH_STATUS, SET_AUTH_ACCESS_TOKEN } from '../actions/auth'

const tokenKey = 'apollui-access-token'

const auth = (state = { accessToken: sessionStorage.getItem(tokenKey) || null }, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS: 
      return { ...state, status: action.status }
    case SET_AUTH_ACCESS_TOKEN: 
      sessionStorage.setItem(tokenKey, action.accessToken)
      return { ...state, accessToken: action.accessToken }
    default: 
      return state
  }
}

export default auth