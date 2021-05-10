import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import settings from './settings';
import pools from './pools';
import mcuStats from './mcuStats';
import mcuManage from './mcuManage';
import minerStats from './minerStats';
import minerOnline from './minerOnline';
import minerManage from './minerManage';
import mcuWifiScan from './mcuWifiScan';
import mcuWifiConnect from './mcuWifiConnect';
import mcuWifiDisconnect from './mcuWifiDisconnect';
import nodeStats from './nodeStats';
import backup from './backup';

export default combineReducers({
  auth,
  alert,
  settings,
  pools,
  mcuStats,
  mcuManage,
  minerStats,
  minerOnline,
  minerManage,
  mcuWifiScan,
  mcuWifiConnect,
  mcuWifiDisconnect,
  nodeStats,
  backup
});
