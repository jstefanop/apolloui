import { combineReducers } from 'redux'
import auth from './auth'
import error from './error'
import settings from './settings'
import mcuStats from './mcuStats'
import minerStats from './minerStats'
import minerOnline from './minerOnline'
import minerStart from './minerStart'

export default combineReducers({
  auth,
  error,
  settings,
  mcuStats,
  minerStats,
  minerOnline,
  minerStart
})
