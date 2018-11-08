
import McuAPI from '../api/mcu';
import { setError } from './alert'

export const FETCH_MCU_BEGIN = 'FETCH_MCU_BEGIN';
export const FETCH_MCU_SUCCESS = 'FETCH_MCU_SUCCESS';
export const FETCH_MCU_FAILURE = 'FETCH_MCU_FAILURE';

export const fetchMcuBegin = () => ({
  type: FETCH_MCU_BEGIN,
});

export const fetchMcuSuccess = data => ({
  type: FETCH_MCU_SUCCESS,
  payload: { data },
});

export const fetchMcuFailure = ({ error }) => ({
  type: FETCH_MCU_FAILURE,
  error,
});

export function fetchMcu() {
	return async (dispatch, getState) => {
		dispatch(fetchMcuBegin());
		const { result, error } = await McuAPI.fetchMcu({ accessToken: getState().auth.accessToken });

		if (error) {
			dispatch(fetchMcuFailure({ error: error.message }));
		} else {
			dispatch(fetchMcuSuccess(result));
		}
	};
}

export const WIFISCAN_MCU_SUCCESS = 'WIFISCAN_MCU_SUCCESS';

export const wifiScanMcuSuccess = data => ({
  type: WIFISCAN_MCU_SUCCESS,
  payload: { data }
});

export function wifiScanMcu() {
	return async (dispatch, getState) => {
		try {
			const { result, error } = await McuAPI.wifiScanMcu({ accessToken: getState().auth.accessToken });

			if (error) {
				dispatch(setError({ message: error.message }))
			} else {
				dispatch(wifiScanMcuSuccess(result))
			}
		} catch (error) {
			dispatch(setError({ message: error.message }))
		}
	}
}

export const WIFICONNECT_MCU_SUCCESS = 'WIFICONNECT_MCU_SUCCESS';

export const WIFICONNECT_MCU_FAILURE = 'WIFICONNECT_MCU_FAILURE';

export const wifiConnectMcuSuccess = data => ({
  type: WIFICONNECT_MCU_SUCCESS,
  payload: { data }
});

export const wifiConnectMcuFailure = ({ error }) => ({
  type: WIFICONNECT_MCU_FAILURE,
  error
});

export function wifiConnectMcu(options) {
	return async (dispatch, getState) => {
		try {
			const { result, error } = await McuAPI.wifiConnectMcu({ options, accessToken: getState().auth.accessToken });

			if (error) {
			  dispatch(wifiConnectMcuFailure({ error: error.message }))
			} else {
			  dispatch(wifiConnectMcuSuccess(result))
			}
		} catch (error) {
			dispatch(wifiConnectMcuFailure({ error: error.message }))
		}
	}
}

export const REBOOT_MCU_SUCCESS = 'REBOOT_MCU_SUCCESS';

export const rebootMcuSuccess = data => ({
  type: REBOOT_MCU_SUCCESS,
  payload: { data }
});

export function rebootMcu() {
  return async (dispatch, getState) => {
	const {
	  error,
	} = await McuAPI.rebootMcu({ accessToken: getState().auth.accessToken });

		if (error) {
		  dispatch(setError({ message: error.message }))
		} else {
		  dispatch(rebootMcuSuccess())
		}
	}
}

export const SHUTDOWN_MCU_SUCCESS = 'SHUTDOWN_MCU_SUCCESS';

export const shutdownMcuSuccess = data => ({
  type: SHUTDOWN_MCU_SUCCESS,
  payload: { data }
});

export function shutdownMcu() {
  return async (dispatch, getState) => {
	const {
	  error,
	} = await McuAPI.shutdownMcu({ accessToken: getState().auth.accessToken });

		if (error) {
		  dispatch(setError({ message: error.message }))
		} else {
		  dispatch(shutdownMcuSuccess())
		}
	}
}