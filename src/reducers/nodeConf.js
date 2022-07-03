import {
  FETCH_NODE_CONF_BEGIN,
  FETCH_NODE_CONF_SUCCESS,
  FETCH_NODE_CONF_FAILURE
} from '../actions/node';

export default function nodeConfReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_NODE_CONF_BEGIN:
      return {
        ...state,
        loading: true
      };

    case FETCH_NODE_CONF_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };

    case FETCH_NODE_CONF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
