import { combineReducers } from 'redux'
import auth from './auth'
import error from './error'
import settings from './settings'
import mcu from './mcu'
import miner from './miner'

export default combineReducers({
  auth,
  error,
  settings,
  mcu,
  miner
})
