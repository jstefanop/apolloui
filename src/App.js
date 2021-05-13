import React, { Component, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.scss';

// Containers
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { DefaultLayout } from './containers';

import { defaultLocale, dynamicActivate } from './i18n';

import Login from './views/Login/Login';

import { Page404, Page500 } from './views/Errors';
import { Alert } from './views/Alerts';
import { history } from './store';

const App = () => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <Alert/>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </ConnectedRouter>
    </I18nProvider>
  )
}

export default App;
