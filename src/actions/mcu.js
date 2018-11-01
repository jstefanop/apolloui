
import McuAPI from '../api/mcu'
import { setError } from './error'

// export const SET_MCU = 'SET_MCU'
// export const setMcu = (data) => ({ type: SET_MCU, data })

export const FETCH_MCU_BEGIN   = 'FETCH_MCU_BEGIN';
export const FETCH_MCU_SUCCESS = 'FETCH_MCU_SUCCESS';

export const fetchMcuBegin = () => ({
	type: FETCH_MCU_BEGIN
});

export const fetchMcuSuccess = data => ({
	type: FETCH_MCU_SUCCESS,
	payload: { data }
});

export function fetchMcu () {
  	return async function (dispatch, getState) {
  		dispatch(fetchMcuBegin());
    	const { result, error } = await McuAPI.fetchMcu({ accessToken: getState().auth.accessToken })

	    if (error) {
	      dispatch(setError({ message: error.message }))
	    } else {
	    	console.log(result);
	      dispatch(fetchMcuSuccess(result))
	    }
  	}
}
