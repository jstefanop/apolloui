
import MinerAPI from '../api/miner'
import { setError } from './error'

export const FETCH_MINER_BEGIN = 'FETCH_MINER_BEGIN';
export const FETCH_MINER_SUCCESS = 'FETCH_MINER_SUCCESS';

export const fetchMinerBegin = () => ({
  type: FETCH_MINER_BEGIN,
});

export const fetchMinerSuccess = data => ({
  type: FETCH_MINER_SUCCESS,
  payload: { data },
});

export function fetchMiner() {
  return async (dispatch, getState) => {
    dispatch(fetchMinerBegin());
    const {
      result,
      error,
    } = await MinerAPI.fetchMiner({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(fetchMinerSuccess(result));
    }
  };
}

export const ONLINE_MINER_BEGIN = 'ONLINE_MINER_BEGIN';
export const ONLINE_MINER_SUCCESS = 'ONLINE_MINER_SUCCESS';

export const onlineMinerBegin = () => ({
  type: ONLINE_MINER_BEGIN,
});

export const onlineMinerSuccess = data => ({
  type: ONLINE_MINER_SUCCESS,
  payload: { data },
});

export function onlineMiner() {
  return async (dispatch, getState) => {
    dispatch(onlineMinerBegin());
    const {
      result,
      error,
    } = await MinerAPI.onlineMiner({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(onlineMinerSuccess(result));
    }
  };
}

export const START_MINER_SUCCESS = 'START_MINER_SUCCESS';

export const startMinerSuccess = data => ({
  type: START_MINER_SUCCESS,
  payload: { data },
});

export function startMiner() {
  return async (dispatch, getState) => {
    const {
      error,
    } = await MinerAPI.startMiner({ accessToken: getState().auth.accessToken });

	    if (error) {
	      dispatch(setError({ message: error.message }))
	    } else {
	      dispatch(startMinerSuccess())
	    }
  	}
}
