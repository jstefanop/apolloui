import {
  WIFICONNECT_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
  data: null
};

function mcuWifiConnectReducer(state = initialState, action) {
  switch(action.type) {
    case WIFICONNECT_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data.address,
      };

    default:
      return state;
  }
}

export default mcuWifiConnectReducer;