
import { push } from 'connected-react-router';

import AuthAPI from '../api/auth';
import PoolAPI from '../api/pool';
import MinerAPI from '../api/miner';
import SettingsAPI from '../api/settings';
import { setSettings } from './settings';
import { setError } from './alert';

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const setAuthStatus = status => ({ type: SET_AUTH_STATUS, status });

export const SET_AUTH_ACCESS_TOKEN_BEGIN = 'SET_AUTH_ACCESS_TOKEN_BEGIN';
export const setAuthAccessTokenBegin = () => ({ type: SET_AUTH_ACCESS_TOKEN_BEGIN });

export const SET_AUTH_ACCESS_TOKEN = 'SET_AUTH_ACCESS_TOKEN';
export const setAuthAccessToken = accessToken => ({ type: SET_AUTH_ACCESS_TOKEN, accessToken });

export const SET_AUTH_ACCESS_TOKEN_FAILURE = 'SET_AUTH_ACCESS_TOKEN_FAILURE';
export const setAuthAccessTokenFailure = ({ message }) => ({ type: SET_AUTH_ACCESS_TOKEN_FAILURE, message });

export function fetchStatus() {
  return async (dispatch) => {
    const { result, error } = await AuthAPI.fetchStatus();

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(setAuthStatus(result.status));
    }
  };
}

export function saveInitialSetup({ password, poolSetup }) {
  return async (dispatch) => {
    let { result, error } = await AuthAPI.saveSetup({ password });

    if (error) {
      dispatch(setError({ message: error.message }));
      return;
    }

    if (poolSetup) {
      ({ result, error } = await AuthAPI.login({ password }));

      if (error) {
        dispatch(setError({ message: error.message }));
        return;
      }

      ({ error } = await PoolAPI.createPool({
        enabled: true,
        url: poolSetup.url,
        username: poolSetup.username,
        password: poolSetup.password,
        proxy: poolSetup.proxy,
      }, {
        accessToken: result.accessToken,
      }));

      if (error) {
        dispatch(setError({ message: error.message }));
        return;
      }

      ({ error } = await MinerAPI.restartMiner({ accessToken: result.accessToken }));
      if (error) {
        dispatch(setError({ message: error.message }));
        return;
      }
    }

    dispatch(setAuthStatus('done'));
  };
}

export function login({ password }) {
  return async (dispatch) => {
    dispatch(setAuthAccessTokenBegin());
    const { result, error } = await AuthAPI.login({ password });

    if (error) {
      dispatch(setAuthAccessTokenFailure({ message: error.message }));
      return;
    }

    const { accessToken } = result;

    const { result: result2, error: error2 } = await SettingsAPI.fetchSettings({ accessToken });

    if (error2) {
      dispatch(setAuthAccessTokenFailure({ message: error2.message }));
      return;
    }

    dispatch(setSettings(result2.settings));
    dispatch(setAuthAccessToken(accessToken));
    dispatch(push('/'));
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch(setAuthAccessToken(null));
  };
}

export function changePassword({ password }) {
  return async (dispatch, getState) => {
    const {
      error,
    } = await AuthAPI.changePassword({ password, accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(setAuthAccessToken(null));
    }
  };
}
