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

import { fetchMcu, versionMcu } from '../../actions/mcu';
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
    this.props.versionMcu();

    const interval = (process.env.NODE_ENV === 'production') ? 5000 : 300000;
    this.intervalHandler = setInterval(() => {
      poller();
    }, interval);

    this.intervalHandlerVersion = setInterval(() => {
      this.props.versionMcu();
    }, 3600000);

    console.log('ENV', process.env.NODE_ENV, process.env.REACT_APP_ENV, interval);
  }

  componentWillUnmount () {
    if (this.intervalHandler) {
        clearTimeout(this.intervalHandler);
        this.intervalHandler = null;
    }

   if (this.intervalHandlerVersion) {
        clearTimeout(this.intervalHandlerVersion);
        this.intervalHandlerVersion = null;
    }
  }

  render() {
    const {
      isloggedin,
      mcu,
      settings,
      location,
      history
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
            <AppSidebarNav navConfig={navigation} location={location} history={history} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb className="bg-light" appRoutes={routes}/>
            <Container fluid>
              {
                isloggedin
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
  isloggedin: state.auth.accessToken != null,
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
    versionMcu: () => {
      dispatch(versionMcu())
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
