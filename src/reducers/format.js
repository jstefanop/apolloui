import { 
  SET_FORMAT_MODAL_STATUS,
  FORMAT_NODE_BEGIN,
  FORMAT_NODE_SUCCESS
} from '../actions/format';

const format = (state = {}, action) => {
  switch (action.type) {
    case SET_FORMAT_MODAL_STATUS:
      return { ...state, status: action.status, done: false };
    case FORMAT_NODE_BEGIN:
      return { ...state, loading: true };
    case FORMAT_NODE_SUCCESS:
      return { ...state, loading: false, done: true };
    default:
      return state;
  }
};

export default format;
