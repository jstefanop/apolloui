import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import { Logout } from './views/Logout'
import { MinerStart } from './views/Miner'

function Loading() {
  return <div><i className="fa fa-spinner spinner mr-2"></i>Loading...</div>;
}

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
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
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/pools', name: 'Pools', component: Pools },
  { path: '/miner/start', name: 'Start miner', component: MinerStart },
  { path: '/logout', name: 'Logout', component: Logout }
];

export default routes;
