import {
  WIFICONNECT_MCU_BEGIN,
  WIFICONNECT_MCU_SUCCESS,
  WIFICONNECT_MCU_FAILURE
} from '../actions/mcu';

const initialState = {
  data: null,
  loading: false,
  error: null
};

function mcuWifiConnectReducer(state = initialState, action) {
  switch(action.type) {
    case WIFICONNECT_MCU_BEGIN:
      return {
        ...state,
        loading: true
      };

    case WIFICONNECT_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data.address,
        loading: false,
        error: null
      };
    case WIFICONNECT_MCU_FAILURE:
      return {
        ...state,
        data:  null,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export default mcuWifiConnectReducer;