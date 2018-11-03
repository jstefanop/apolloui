import {
  START_MINER_SUCCESS
} from '../actions/miner';

export default function minerStartReducer(state = {}, action) {
  switch(action.type) {
    case START_MINER_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
}