import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

import { I18nProvider } from '@lingui/react'
import catalogEn from './locales/en/messages.js'

import AppProvider from './context/AppContext';

const catalogs = { en: catalogEn };

class App extends Component {
  render() {
    return (
      <AppProvider>
        <I18nProvider language="en" catalogs={catalogs}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </BrowserRouter>
        </I18nProvider>
      </AppProvider>
    );
  }
}

export default App;
