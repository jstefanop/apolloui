import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import settings from './settings';
import mcuStats from './mcuStats';
import minerStats from './minerStats';
import minerOnline from './minerOnline';
import minerManage from './minerManage';
import mcuWifiScan from './mcuWifiScan';
import mcuWifiConnect from './mcuWifiConnect';

export default combineReducers({
  auth,
  alert,
  settings,
  mcuStats,
  minerStats,
  minerOnline,
  minerManage,
  mcuWifiScan,
  mcuWifiConnect
});
