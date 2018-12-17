import {
  WIFIDISCONNECT_MCU_BEGIN,
  WIFIDISCONNECT_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
  loading: false
};

function mcuWifiDisconnectReducer(state = initialState, action) {
  switch(action.type) {
    case WIFIDISCONNECT_MCU_BEGIN:
      return {
        ...state,
        loading: true
      };

    case WIFIDISCONNECT_MCU_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export default mcuWifiDisconnectReducer;