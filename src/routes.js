import Loadable from 'react-loadable';

import { Loading } from './views/Loading';
import DefaultLayout from './containers/DefaultLayout';
import { Logout } from './views/Logout';
import { MinerManage } from './views/Miner';
import { McuManage } from './views/Mcu';

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Node = Loadable({
  loader: () => import('./views/Settings'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./views/Settings'),
  loading: Loading,
});

const Pools = Loadable({
  loader: () => import('./views/Pools'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/node', name: 'Node', component: Settings },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/pools', name: 'Pools', component: Pools },
  { path: '/miner/start', name: 'Start miner', component: MinerManage },
  { path: '/miner/restart', name: 'Start miner', component: MinerManage },
  { path: '/miner/stop', name: 'Start miner', component: MinerManage },
  { path: '/mcu/reboot', name: 'Reboot Mcu', component: McuManage },
  { path: '/mcu/shutdown', name: 'Shutdown Mcu', component: McuManage },
  { path: '/logout', name: 'Logout', component: Logout }
];

export default routes;
