
import MinerAPI from '../api/miner'
import { setError } from './error'

export const FETCH_MINER_BEGIN   = 'FETCH_MINER_BEGIN';
export const FETCH_MINER_SUCCESS = 'FETCH_MINER_SUCCESS';

export const fetchMinerBegin = () => ({
	type: FETCH_MINER_BEGIN
});

export const fetchMinerSuccess = data => ({
	type: FETCH_MINER_SUCCESS,
	payload: { data }
});

export function fetchMiner () {
  	return async function (dispatch, getState) {
  		dispatch(fetchMinerBegin());
    	const { result, error } = await MinerAPI.fetchMiner({ accessToken: getState().auth.accessToken })

	    if (error) {
	      dispatch(setError({ message: error.message }))
	    } else {
	      dispatch(fetchMinerSuccess(result))
	    }
  	}
}
