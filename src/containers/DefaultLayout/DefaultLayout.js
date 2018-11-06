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

class DefaultLayout extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const poller = () => {
      this.props.onlineMiner();
      this.props.fetchMcu();
      this.props.fetchMiner();
    }

    poller();

    this.intervalHandler = setInterval(() => {
      poller();
    }, 5000);
  }

  componentWillUnmount () {
    if (this.intervalHandler) {
        clearTimeout(this.intervalHandler);
        this.intervalHandler = null;
    } 
  }

  render() {
    const {
      isLoggedIn
    } = this.props

    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
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
                      <Redirect from="/" to="/dashboard" />
                    </Switch>
                  : <Redirect to="/login" />
              }
            </Container>
          </main>
          <AppAside fixed>
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
  isLoggedIn: state.auth.accessToken != null
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
