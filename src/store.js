import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    loggerMiddleware
  )
)

export { history }
export default store