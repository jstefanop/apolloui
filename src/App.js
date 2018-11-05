import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import './App.scss'

// Containers
import { DefaultLayout } from './containers'

import Login from './views/Login/Login'

import { Page404, Page500 } from './views/Errors'
import { ErrorAlert } from './views/Alerts'
import { history } from './store'


import { I18nProvider } from '@lingui/react'
import catalogEn from './locales/en/messages.js'

const catalogs = { en: catalogEn }

class App extends Component {
  render() {
    return (
      <I18nProvider language="en" catalogs={catalogs}>
        <ErrorAlert/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </ConnectedRouter>
      </I18nProvider>
    );
  }
}

export default App;
