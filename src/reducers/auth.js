import { SET_AUTH_STATUS } from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS: 
      return { ...state, status: action.status }
    default: 
      return state
  }
}

export default auth