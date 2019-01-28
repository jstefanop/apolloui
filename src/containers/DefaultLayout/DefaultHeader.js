import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Badge, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/favicon.png'

import { convertTemp, displayHashrate } from '../../views/Filters';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  render() {

    // eslint-disable-next-line
    const { settings, loadingMiner, miner, mcu, loadingOnline, minerCheck, children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 87, height: 40, alt: 'Futurebit Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Futurebit Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Badge color={ minerCheck.online.status ? 'success' : 'danger' }>{ minerCheck.online.status ? 'ONLINE' : 'OFFLINE' }</Badge>
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-fire mr-2"></i><span className="text-muted font-weight-bold">{ minerCheck.online.status ? displayHashrate(miner.stats.summary.data.workUtility * 71582788, 'h') : '...' }</span>
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-thermometer-half mr-2"></i><span className="text-muted text-bold">{ minerCheck.online.status ? convertTemp(mcu.stats.minerTemperature, settings.temperatureUnit, true) : '...' }</span>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <span className="text-muted small">Apollo Web</span> <Badge pill color="light">v{ process.env.REACT_APP_VERSION }</Badge> <Badge pill color="warning">beta</Badge>
          </NavItem>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    mcu: state.mcuStats.data,
    loadingMiner: state.minerStats.loading,
    miner: state.minerStats.data,
    loadingOnline: state.minerOnline.loading,
    minerCheck: state.minerOnline.data,
    settings: state.settings
  }
}

export default connect(mapStateToProps)(DefaultHeader);