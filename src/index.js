import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { fetchStatus } from './actions/auth'
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store'


store.dispatch(fetchStatus())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
