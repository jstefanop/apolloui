
import omit from 'lodash/omit';

import SettingsAPI from '../api/settings';
import PoolsAPI from '../api/pool';
import MinerAPI from '../api/miner';
import { setError, setSuccess } from './alert';
import { setSettings } from './settings';
import { setPoolsData } from './pool';

export const SET_RESTORE_MODAL_STATUS = 'SET_RESTORE_MODAL_STATUS';
export const setRestoreModalStatus = status => ({ type: SET_RESTORE_MODAL_STATUS, status });

async function createFile(content) {
  const today = new Date();
  const filename = `backup_${today.getFullYear()}${(today.getMonth() + 1)}${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(content))}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

async function getSettings(dispatch, getState) {
  const {
    result,
    error,
  } = await SettingsAPI.fetchSettings({ accessToken: getState().auth.accessToken });

  if (error) {
    dispatch(setError({ message: error.message }));
  } else {
    return result.settings;
  }

  return undefined;
}

async function getPools(dispatch, getState) {
  const {
    result,
    error,
  } = await PoolsAPI.fetchPools({ accessToken: getState().auth.accessToken });

  if (error) {
    dispatch(setError({ message: error.message }));
  } else {
    return result.pools;
  }

  return undefined;
}

async function restoreSettings(dispatch, getState, settings) {
  const {
    result,
    error,
  } = await SettingsAPI.saveSettings({ settings, accessToken: getState().auth.accessToken });

  if (error) {
    dispatch(setError({ message: error.message }));
    return false;
  }

  dispatch(setSettings(result.settings));
  return true;
}

async function restorePools(dispatch, getState, pools) {
  let {
    result, // eslint-disable-line prefer-const
    error,
  } = await PoolsAPI.updatePools({ pools: pools.map(p => omit(p, ['id'])), accessToken: getState().auth.accessToken });

  if (error) {
    dispatch(setError({ message: error.message }));
    return false;
  }

  const newPools = result.pools;

  ({ error } = await MinerAPI.restartMiner({ accessToken: getState().auth.accessToken }));
  if (error) {
    dispatch(setError({ message: error.message }));
    return false;
  }

  dispatch(setPoolsData(newPools));
  return true;
}

export function backupConfiguration() {
  return async (dispatch, getState) => {
    const backup = {
      settings: await getSettings(dispatch, getState),
      pools: await getPools(dispatch, getState),
    };

    if (!backup.settings || !backup.pools) {
      dispatch(setError({ message: 'Cannot create backup file.' }));
    }

    createFile(backup);
  };
}

export function toggleRestoreModal({ status }) {
  return async (dispatch) => {
    dispatch(setRestoreModalStatus(status));
  };
}

export function restoreConfiguration({ backup }) {
  return async (dispatch, getState) => {
    console.log(backup);
    if (await restoreSettings(dispatch, getState, backup.settings)
        && await restorePools(dispatch, getState, backup.pools)) {
      dispatch(setSuccess({ message: 'Backup successfully restored.' }));
    }
  };
}
