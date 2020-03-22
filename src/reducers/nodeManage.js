import {
  START_NODE_SUCCESS,
  STOP_NODE_SUCCESS
} from '../actions/node';

function nodeManageReducer(state = {}, action) {
  switch(action.type) {
    case START_NODE_SUCCESS:
      return { ...state };
    case STOP_NODE_SUCCESS:
      return { ...state };
    default:
      return state;
  }
}

export default nodeManageReducer;
