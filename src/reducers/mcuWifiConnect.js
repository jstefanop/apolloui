import {
  WIFICONNECT_MCU_SUCCESS,
  WIFICONNECT_MCU_FAILURE
} from '../actions/mcu';

const initialState = {
  data: null,
  error: null
};

function mcuWifiConnectReducer(state = initialState, action) {
  switch(action.type) {
    case WIFICONNECT_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data.address,
        error: null
      };
    case WIFICONNECT_MCU_FAILURE:
      return {
        ...state,
        data:  null,
        error: action.error
      };

    default:
      return state;
  }
}

export default mcuWifiConnectReducer;