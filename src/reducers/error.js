import { SET_ERROR, CLEAR_ERROR } from '../actions/error'

const error = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR: 
      return { message: action.message }
    case CLEAR_ERROR:
      return null
    default: 
      return state
  }
}

export default error