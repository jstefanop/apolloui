
import { push } from 'connected-react-router'

import AuthAPI from '../api/auth'
import PoolAPI from '../api/pool'
import { setError } from './error'

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
export const setAuthStatus = (status) => ({ type: SET_AUTH_STATUS, status })

export const SET_AUTH_ACCESS_TOKEN = 'SET_AUTH_ACCESS_TOKEN'
export const setAuthAccessToken = (accessToken) => ({ type: SET_AUTH_ACCESS_TOKEN, accessToken })

export function fetchStatus () {
  return async function (dispatch) {
    const { result, error } = await AuthAPI.fetchStatus()

    if (error) {
      dispatch(setError({ message: error.message }))
    } else {
      dispatch(setAuthStatus(result.status))
    }
  }
}

export function saveInitialSetup ({ password, poolSetup }) {
  return async function (dispatch) {
    const { error } = await AuthAPI.saveSetup({ password })

    if (error) {
      dispatch(setError({ message: error.message }))
      return
    } 

    if (poolSetup) {
      let { result, error } = await AuthAPI.login({ password })

      if (error) {
        dispatch(setError({ message: error.message }))
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
        dispatch(setError({ message: error.message }))
        return
      } 
    }

    dispatch(setAuthStatus('done'))
  }
}

export function login ({ password }) {
  return async function (dispatch) {
    let { result, error } = await AuthAPI.login({ password })

    if (error) {
      dispatch(setError({ message: error.message }))
      return
    } 

    dispatch(setAuthAccessToken(result.accessToken))
    dispatch(push('/'))
  }
}

export function logout () {
  return async function (dispatch) {
    dispatch(setAuthAccessToken(null))
  }
}