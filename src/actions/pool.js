
import omit from 'lodash/omit';

import PoolsAPI from '../api/pool';
import MinerAPI from '../api/miner';
import { setError, setSuccess } from './alert';


export const SET_POOLS_DATA = 'SET_POOLS_DATA';
export const setPoolsData = pools => ({ type: SET_POOLS_DATA, pools });

export const SET_POOLS_LOADING = 'SET_POOLS_LOADING';
export const setPoolsLoading = () => ({ type: SET_POOLS_LOADING });

export function fetchPools() {
  return async (dispatch, getState) => {
    dispatch(setPoolsLoading());

    const {
      result,
      error,
    } = await PoolsAPI.fetchPools({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(setPoolsData(result.pools));
    }
  };
}

export function updatePoolsAndRestartMiner(pools) {
  return async (dispatch, getState) => {
    let {
      result, // eslint-disable-line prefer-const
      error,
    } = await PoolsAPI.updatePools({ pools: pools.map(p => omit(p, ['id'])), accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    }

    const newPools = result.pools;

    ({ error } = await MinerAPI.restartMiner({ accessToken: getState().auth.accessToken }));
    if (error) {
      dispatch(setError({ message: error.message }));
      return;
    }

    dispatch(setPoolsData(newPools));
    dispatch(setSuccess({ message: 'Pools successfully saved, miner restarted.' }));
  };
}
