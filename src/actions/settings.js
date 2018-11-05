
import SettingsAPI from '../api/settings';
import { setError, setSuccess } from './alert';

export const SET_SETTINGS = 'SET_SETTINGS';
export const setSettings = settings => ({ type: SET_SETTINGS, settings });

export function fetchSettings() {
  return async (dispatch, getState) => {
    const {
      result,
      error,
    } = await SettingsAPI.fetchSettings({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(setSettings(result.settings));
    }
  };
}

export function saveSettings(settings) {
  return async (dispatch, getState) => {
    const {
      result,
      error,
    } = await SettingsAPI.saveSettings({ settings, accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }));
    } else {
      dispatch(setSettings(result.settings));
      dispatch(setSuccess({ message: 'Settings successfully saved.' }));
    }
  };
}
