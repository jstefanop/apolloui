
import AuthAPI from '../api/auth'
import PoolAPI from '../api/pool'
import { setError } from './error'

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
export const setAuthStatus = (status) => ({ type: SET_AUTH_STATUS, status })

export function fetchStatus () {
  return async function (dispatch) {
    const { result, error } = await AuthAPI.fetchStatus()

    if (error) {
      dispatch(setError(error.message))
    } else {
      dispatch(setAuthStatus(result.status))
    }
  }
}

export function saveInitialSetup ({ password, poolSetup }) {
  return async function (dispatch) {
    const { error } = await AuthAPI.saveSetup({ password })

    if (error) {
      dispatch(setError(error.message))
      return
    } 

    if (poolSetup) {
      let { result, error } = await AuthAPI.login({ password })

      if (error) {
        dispatch(setError(error.message))
        return
      } 

       ({ error } = await PoolAPI.create({
        enabled: true,
        url: poolSetup.url,
        username: poolSetup.username,
        password: poolSetup.password,
        proxy: poolSetup.proxy
      }, {
        accessToken: result.accessToken
      }))

      if (error) {
        dispatch(setError(error.message))
        return
      } 
    }

    dispatch(setAuthStatus('done'))
  }
}