import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Badge, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Trans } from '@lingui/macro';

import SystemUtil from '../../views/SystemUtil/SystemUtil';
import ModalsRawStats from '../../views/Modals/ModalsRawStats';

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
      modalsRawStats: false
    };
  }

  openModalsRawStats = () => {
    this.setState({
      modalsRawStats: !this.state.modalsRawStats
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    const { miner, mcu } = this.props;

    return (
      <div>
        <ModalsRawStats isOpen={ this.state.modalsRawStats } toggle={ this.openModalsRawStats }></ModalsRawStats>
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
              <h6><Trans>System info</Trans></h6>

              <div className="aside-options">
                <div className="clearfix mt-4">
                  <small className="text-muted"><i className="fa fa-microchip mr-2 initialism text-secondary"></i><Trans>Architecture</Trans></small>
                </div>
                <div>
                  <small className=""><b>{ mcu.stats.architecture }</b></small>
                </div>
              </div>

              <div className="aside-options">
                <div className="clearfix mt-3">
                  <small className="text-muted"><i className="fa fa-network-wired mr-2 initialism text-secondary"></i><Trans>Hostname</Trans></small>
                </div>
                <div>
                  <small className=""><b>{ mcu.stats.hostname }</b></small>
                </div>
              </div>

              <div className="aside-options">
                <div className="clearfix mt-3">
                  <small className="text-muted"><i className="fa fa-file-alt mr-2 initialism text-secondary"></i><Trans>Operating system</Trans></small>
                </div>
                <div>
                  <small className=""><b>{ mcu.stats.operatingSystem }</b></small>
                </div>
              </div>

              <div className="aside-options">
                <div className="clearfix mt-3">
                  <small className="text-muted"><i className="fa fa-wifi mr-2 initialism text-secondary"></i><Trans>Active wifi</Trans></small>
                </div>
                <div>
                  <small className=""><b>{ mcu.stats.activeWifi || 'No active wifi' }</b></small>
                </div>
              </div>

              { (miner.stats.summary.status && miner.stats.summary.status.description) && (
              <div className="aside-options">
                <div className="clearfix mt-3">
                  <small className="text-muted"><i className="fa fa-hdd mr-2 initialism text-secondary"></i><Trans>Bfgminer</Trans></small>
                </div>
                <div>
                  <small className="">Version: <b>{ miner.stats.summary.status.description }</b></small>
                </div>
              </div>
              )}

              <hr className="mt-4>" />

              <h6><Trans>Network info</Trans></h6>

              { mcu.stats.network.map((network, idx) => {
                return <div className="aside-options" key={ idx }>
                    <div className="clearfix mt-4">
                      <small className="text-muted"><i className="fa fa-stream mr-2 initialism text-secondary"></i>{ network.name }</small>
                    </div>
                    <div>
                      <Badge color={ network.address ? 'success' : 'light' }>{ network.address ? 'Connected' : 'Disconnected' }</Badge>
                    </div>
                    <div>
                      <small className="">Address: <b>{ network.address || 'No address found' }</b></small>
                    </div>
                    <div>
                      <small className="">MAC: <b>{ network.mac }</b></small>
                    </div>
                  </div>
              })}

              <hr className="mt-4>" />

              <SystemUtil></SystemUtil>

              <div className="aside-options mt-4">
                <div className="clearfix mt-3">
                  <Button color="primary" size="sm" onClick={ this.openModalsRawStats }><Trans>Raw stats</Trans></Button>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </React.Fragment>
      </div>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    loadingMcu: state.mcuStats.loading,
    mcu: state.mcuStats.data,
    mcuError: state.mcuStats.error,
    miner: state.minerStats.data,
    settings: state.settings,
    wifiAddress: state.mcuWifiConnect.data
  }
}

export default connect(mapStateToProps)(DefaultAside);
