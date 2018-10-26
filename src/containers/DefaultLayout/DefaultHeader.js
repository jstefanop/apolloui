import React, { Component } from 'react';
import { Button, Badge, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/favicon.png'

import { AppContext } from '../../context/AppContext';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

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
            <Badge color="success">ONLINE</Badge>
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-fire mr-2"></i><span className="text-muted font-weight-bold">135.87 MH/s</span>
          </NavItem>
          <NavItem className="px-3">
            <i className="fa fa-thermometer-half mr-2"></i><span className="text-muted text-bold">67°c</span>
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

export default DefaultHeader;
