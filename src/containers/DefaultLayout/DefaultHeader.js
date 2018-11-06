import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Button, Badge, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/favicon.png'

import DisplayHashrate from '../../views/Filters/DisplayHashrate';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  render() {

    // eslint-disable-next-line
    const { loadingMiner, miner, loadingOnline, minerCheck, children, ...attributes } = this.props;

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
            <i className="fa fa-fire mr-2"></i><span className="text-muted font-weight-bold">{ minerCheck.online.status ? DisplayHashrate(miner.stats.summary.data.mHSAv, 'mh') : '...' }</span>
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-thermometer-half mr-2"></i><span className="text-muted text-bold">{ minerCheck.online.status ? miner.stats.summary.data.temperature || 0 + ' C°' : '...' }</span>
          </NavItem>
          <NavItem className="px-3">
            <Button size="sm" className="btn-warning text-uppercase"><Trans>Restart</Trans></Button>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
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
    loadingMiner: state.minerStats.loading,
    miner: state.minerStats.data,
    loadingOnline: state.minerOnline.loading,
    minerCheck: state.minerOnline.data,
  }
}

export default connect(mapStateToProps)(DefaultHeader);