import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, NavLink, Progress, TabContent, TabPane } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'
import { Trans } from '@lingui/macro';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <h6>Quick Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><i className="fa fa-leaf mr-2 initialism text-secondary"></i><b>ECO mode</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'primary'} size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Keep your miner quite and power efficient</small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><i className="fa fa-rocket mr-2 initialism text-secondary"></i><b>Turbo mode</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Put your miner on steroids despite power usage</small>
              </div>
            </div>

            <div className="aside-options mt-3 text-center">
              <Button size="sm" className="btn-warning text-uppercase"><Trans>Restart</Trans></Button>
            </div>

            <div className="aside-options mt-3">
              <div>
                <small className="text-muted">To change pools, custom mode or any other option head to the <Link to={'/settings'}>settings</Link> page.
                </small>
              </div>
            </div>

            <hr className="mb-4 mt-4"/>

            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
