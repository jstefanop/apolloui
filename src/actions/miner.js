
import MinerAPI from '../api/miner'
import { setError } from './alert'

export const FETCH_MINER_BEGIN = 'FETCH_MINER_BEGIN';
export const FETCH_MINER_SUCCESS = 'FETCH_MINER_SUCCESS';
export const FETCH_MINER_FAILURE = 'FETCH_MINER_FAILURE';

export const fetchMinerBegin = () => ({
  type: FETCH_MINER_BEGIN,
});

export const fetchMinerSuccess = data => ({
  type: FETCH_MINER_SUCCESS,
  payload: { data },
});

export const fetchMinerFailure = ({ error }) => ({
  type: FETCH_MINER_FAILURE,
  error,
});

export function fetchMiner() {
  return async (dispatch, getState) => {
    dispatch(fetchMinerBegin());
    const {
      result,
      error,
    } = await MinerAPI.fetchMiner({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(fetchMinerFailure({ error: error.message }));
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
  payload: { data }
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

export const RESTART_MINER_SUCCESS = 'RESTART_MINER_SUCCESS';

export const restartMinerSuccess = data => ({
  type: RESTART_MINER_SUCCESS,
  payload: { data }
});

export function restartMiner() {
  return async (dispatch, getState) => {
    const {
      error,
    } = await MinerAPI.restartMiner({ accessToken: getState().auth.accessToken });

	    if (error) {
	      dispatch(setError({ message: error.message }))
	    } else {
	      dispatch(restartMinerSuccess())
	    }
  	}
}

export const STOP_MINER_SUCCESS = 'STOP_MINER_SUCCESS';

export const stopMinerSuccess = data => ({
  type: STOP_MINER_SUCCESS,
  payload: { data }
});

export function stopMiner() {
  return async (dispatch, getState) => {
    const {
      error,
    } = await MinerAPI.stopMiner({ accessToken: getState().auth.accessToken });

	    if (error) {
	      dispatch(setError({ message: error.message }))
	    } else {
	      dispatch(stopMinerSuccess())
	    }
  	}
}
