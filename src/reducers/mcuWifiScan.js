import {
  WIFISCAN_MCU_BEGIN,
  WIFISCAN_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
  data: {
    wifiScan: [],
    loading: false
  }
};

function mcuWifiScanReducer(state = initialState, action) {
  switch(action.type) {
    case WIFISCAN_MCU_BEGIN:
      return {
        ...state,
        loading: true
      };

    case WIFISCAN_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data.wifiScan,
        loading: false
      };

    default:
      return state;
  }
}

export default mcuWifiScanReducer;