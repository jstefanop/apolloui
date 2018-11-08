import { 
	SET_AUTH_STATUS,
	SET_AUTH_ACCESS_TOKEN,
	SET_AUTH_ACCESS_TOKEN_BEGIN,
	SET_AUTH_ACCESS_TOKEN_FAILURE
} from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS: 
      return { ...state, status: action.status, loading: false, message: null }
    case SET_AUTH_ACCESS_TOKEN_BEGIN: 
      return { ...state, accessToken: null, loading: true, message: null }
    case SET_AUTH_ACCESS_TOKEN: 
      return { ...state, accessToken: action.accessToken, loading: false, message: null }
    case SET_AUTH_ACCESS_TOKEN_FAILURE: 
      return { ...state, accessToken: null, loading: false, message: action.message }
    default: 
      return state
  }
}

export default auth