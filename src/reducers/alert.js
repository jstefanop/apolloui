import { SET_ERROR, CLEAR_ALERT, SET_SUCCESS } from '../actions/alert';

const error = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { message: action.message, type: 'error' };
    case SET_SUCCESS:
      return { message: action.message, type: 'success' };
    case CLEAR_ALERT:
      return null;
    default:
      return state;
  }
};

export default error;
