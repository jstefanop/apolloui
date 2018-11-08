import { SET_RESTORE_MODAL_STATUS } from '../actions/backup';

const backup = (state = {}, action) => {
  switch (action.type) {
    case SET_RESTORE_MODAL_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default backup;
