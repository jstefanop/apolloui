import {
  REBOOT_MCU_SUCCESS,
  SHUTDOWN_MCU_SUCCESS,
  UPDATE_MCU_SUCCESS
} from '../actions/mcu';

function mcuManageReducer(state = {}, action) {
  switch(action.type) {
    case REBOOT_MCU_SUCCESS:
      return {
        ...state
      };
    case SHUTDOWN_MCU_SUCCESS:
      return {
        ...state
      };
    case UPDATE_MCU_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
}

export default mcuManageReducer;