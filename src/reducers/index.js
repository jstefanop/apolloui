import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import settings from './settings';
import mcuStats from './mcuStats';
import minerStats from './minerStats';
import minerOnline from './minerOnline';
import minerStart from './minerStart';

export default combineReducers({
  auth,
  alert,
  settings,
  mcuStats,
  minerStats,
  minerOnline,
  minerStart,
});
