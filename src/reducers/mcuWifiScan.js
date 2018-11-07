import {
  WIFISCAN_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
  data: {
    wifiScan: []
  }
};

function mcuWifiScanReducer(state = initialState, action) {
  switch(action.type) {
    case WIFISCAN_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data.wifiScan,
      };

    default:
      return state;
  }
}

export default mcuWifiScanReducer;