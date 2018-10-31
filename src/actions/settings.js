
import SettingsAPI from '../api/settings'
import { setError } from './error'

export const SET_SETTINGS = 'SET_SETTINGS'
export const setSettings = (settings) => ({ type: SET_SETTINGS, settings })

export function fetchSettings () {
  return async function (dispatch, getState) {
    const { result, error } = await SettingsAPI.fetchSettings({ accessToken: getState().auth.accessToken })

    if (error) {
      dispatch(setError({ message: error.message }))
    } else {
      dispatch(setSettings(result.settings))
    }
  }
}
