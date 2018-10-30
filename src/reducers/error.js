import { SET_ERROR } from '../actions/error'

const error = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR: 
      return { message: action.message }
    default: 
      return state
  }
}

export default error