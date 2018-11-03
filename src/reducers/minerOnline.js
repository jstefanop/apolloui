import {
  ONLINE_MINER_BEGIN,
  ONLINE_MINER_SUCCESS
} from '../actions/miner';

const initialState = {
	data: {
		timestamp: null,
		status: false
	},
  	loading: false
};

export default function minerOnlineReducer(state = initialState, action) {
  switch(action.type) {
    case ONLINE_MINER_BEGIN:
      return {
        ...state,
        loading: true
      };

    case ONLINE_MINER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };

    default:
      return state;
  }
}