import {
  VERSION_MCU_BEGIN,
  VERSION_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
  data: null
};

function mcuVersionReducer(state = initialState, action) {
  switch(action.type) {
    case VERSION_MCU_BEGIN:
      return {
        ...state
      };

    case VERSION_MCU_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };

    default:
      return state;
  }
}

export default mcuVersionReducer;