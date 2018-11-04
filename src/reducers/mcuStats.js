import {
  FETCH_MCU_BEGIN,
  FETCH_MCU_SUCCESS
} from '../actions/mcu';

const initialState = {
	data: {
		stats: {
			initial: true,
			hostname: null,
			operatingSystem: null,
			uptime: null,
			loadAverage: null,
			architecture: null,
			temperature: null,
			memory: {
				total: 0,
				used: 0,
				cache: 0,
				swap: 0
			},
			cpu: {
				threads: 0,
				usedPercent: 0
			},
			disks: []
		}
	},
  	loading: false
};

export default function mcuReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MCU_BEGIN:
      return {
        ...state,
        loading: true
      };

    case FETCH_MCU_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };

    default:
      return state;
  }
}