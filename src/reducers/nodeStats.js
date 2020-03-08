import {
  FETCH_NODE_BEGIN,
  FETCH_NODE_SUCCESS,
  FETCH_NODE_FAILURE
} from '../actions/node';

const initialState = {
	data: {
		stats: {
			initial: true,
			blockCount: null,
			connectionCount: null,
			peerInfo: {
        addr: null,
        subver: null
      }
		}
	},
  	loading: false,
  	error: null
};

export default function nodeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NODE_BEGIN:
      return {
        ...state,
        loading: true
      };

    case FETCH_NODE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };

    case FETCH_NODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
