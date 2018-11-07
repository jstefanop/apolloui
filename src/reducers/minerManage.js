import {
  START_MINER_SUCCESS,
  RESTART_MINER_SUCCESS,
  STOP_MINER_SUCCESS
} from '../actions/miner';

function minerManageReducer(state = {}, action) {
  switch(action.type) {
    case START_MINER_SUCCESS:
      return {
        ...state
      };
    case RESTART_MINER_SUCCESS:
      return {
        ...state
      };
    case STOP_MINER_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
}

export default minerManageReducer;