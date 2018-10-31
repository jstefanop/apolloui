import { SET_SETTINGS } from '../actions/settings'

const settings = (state = {}, action) => {
  switch (action.type) {
    case SET_SETTINGS: 
      return { ...state, ...action.settings }
    default: 
      return state
  }
}

export default settings