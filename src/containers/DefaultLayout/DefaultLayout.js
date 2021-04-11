import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

import { fetchMcu } from '../../actions/mcu';
import { onlineMiner, fetchMiner } from '../../actions/miner';
import { fetchNode } from '../../actions/node';

class DefaultLayout extends Component {

  componentDidMount() {
    const poller = () => {
      this.props.onlineMiner();
      this.props.fetchMcu();
      this.props.fetchMiner();
      this.props.fetchNode();
    }

    poller();

    const interval = (process.env.NODE_ENV === 'production)') ? 5000 : 300000;
    this.intervalHandler = setInterval(() => {
      poller();
    }, interval);
  }

  componentWillUnmount () {
    if (this.intervalHandler) {
        clearTimeout(this.intervalHandler);
        this.intervalHandler = null;
    }
  }

  render() {
    const {
      isLoggedIn,
      mcu,
      settings
    } = this.props

    let sidebarOptions = {
      fixed: true,
      display: (settings.leftSidebarVisibility) ? 'lg' : '',
      minimized: !settings.leftSidebarExtended || false
    }

    let asideOptions = {
      fixed: true,
      display: (settings.rightSidebarVisibility) ? 'lg' : ''
    }

    // If less memory than 500 MB, hide Start and Stop buttons for Node
    if (mcu && mcu.stats && mcu.stats.memory && mcu.stats.memory.total && mcu.stats.memory.total < 500000) {
      navigation.items[1].children = [{ name: 'Dashboard', url: '/node', icon: 'icon-speedometer' }]
    }

    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar { ...sidebarOptions }>
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb className="bg-light" appRoutes={routes}/>
            <Container fluid>
              {
                isLoggedIn
                  ? <Switch>
                      {routes.map((route, idx) => {
                          return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                              <route.component {...props} />
                            )} />)
                            : (null);
                        },
                      )}
                      <Redirect from="/" to="/miner" />
                    </Switch>
                  : <Redirect to="/login" />
              }
            </Container>
          </main>
          <AppAside { ...asideOptions }>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.accessToken != null,
  mcu: state.mcuStats.data,
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => {
  return {
    onlineMiner: () => {
      dispatch(onlineMiner())
    },
    fetchMcu: () => {
      dispatch(fetchMcu())
    },
    fetchMiner: () => {
      dispatch(fetchMiner())
    },
    fetchNode: () => {
      dispatch(fetchNode())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
