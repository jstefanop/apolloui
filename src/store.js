import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import rootReducer from './reducers';


const history = createBrowserHistory();

const persistConfig = {
  key: 'apolloui-store-persist',
  storage: storageSession,
  whitelist: ['auth', 'settings'],
  stateReconsiler: 'autoMergeLevel1',
};

const persistedReducer = persistReducer(persistConfig, connectRouter(history)(rootReducer));

const loggerMiddleware = createLogger();

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    loggerMiddleware,
  ),
);

const persistor = persistStore(store);

export { history, store, persistor };
export default store;
