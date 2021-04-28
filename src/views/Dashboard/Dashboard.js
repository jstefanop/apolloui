import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Alert,
  Card,
  CardBody,
  Col,
  Row
} from 'reactstrap';

import _ from 'lodash';
import moment from 'moment';

import { LoadingErrorBox } from '../Loading';
import DashboardWidget from '../Widgets/DashboardWidget';
import { convertTemp, displayHashrate, minerModeIcon, powerColor } from '../Filters';
import PoolsTable from '../Pools/PoolsTable';
import HashboardsTable from '../HashboardsTable';

import { Trans } from '@lingui/macro';

class Dashboard extends Component {

  render() {
    const { minerCheck, minerError, mcuError, mcu, miner, settings } = this.props;
    
    // Miner shares
    const minerpercentageError = _.sumBy(miner.stats, function(o) { return o.master.intervals.int_0.errorRate; });
    let errorsColor = 'success';
    if (minerpercentageError >= 5 && minerpercentageError <= 7.5) errorsColor = 'warning';
    else if (minerpercentageError > 7.5) errorsColor = 'danger';

    // Miner uptime
    const minerUptime = moment().to(moment().subtract(_.sumBy(miner.stats, function(o) { return o.master.upTime; }), 'seconds'), true);

    // Last share
    let lastShare = 'Not available',
        lastShareTime = 0,
        lastShareTimes = [],
        lastShareColor = 'success';

    if (miner.stats) {
      miner.stats.forEach((board) => {
        lastShareTimes.push(moment(board.lastsharetime, 'YYYY-MM-DD HH:mm:ss').format('X'));
      });
    }

    lastShareTime = _.max(lastShareTimes);
    lastShare = moment(lastShareTime, 'X').fromNow();
    const timestamp = moment().format('X');
    const diffLastShare = timestamp - lastShareTime;
    if (diffLastShare >= 300 && diffLastShare <= 600) lastShareColor = 'warning';
    else if (diffLastShare > 600) lastShareColor = 'danger'

    if (!minerCheck.online.status) {
      return (
        <LoadingErrorBox 
          show={ true }
          bg="bg-0"
          title="Miner is offline"
          centerTitle={ true }
          subtitle="Try to start it"
          error={ false }
          centerSubtitle={ true }
          icon="fa-toggle-off animated bounce"
          showBtn={ true }
          btnTo="/miner/start"
          btnText="Start"
        />
      )
    }

    if (minerError) {
      return (
        <LoadingErrorBox 
          show={true}
          bg="bg-0"
          title="It seems there is a problem to communicate with the miner, check error message."
          centerTitle={true}
          subtitle="Wait at least 1 minute, if problem persists, try to restart the miner, check the settings or try to reboot the system."
          error={ minerError }
          log={ mcu.stats.bfgminerLog }
          centerSubtitle={true}
          icon="fa-exclamation-circle animated bounce"
          showBtn={false}
          showProgress={ false }
        />
      )
    }

    return (
      <div ref="main">
        { (mcuError) ?
            <Alert color="warning">There is a problem fetching system stats (<b>{ mcuError }</b>)</Alert>
          : null 
        }
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-dark" 
                icon="fa fa-fire" 
                value={ displayHashrate(_.sumBy(miner.stats, function(o) { return o.master.intervals.int_0.bySol; }), 'gh') }
                title="Current hashrate"
                progressColor="primary"
                progressValue="100"
                secondaryTitle="15 Min Avg"
                secondaryValue={ displayHashrate(_.sumBy(miner.stats, function(o) { return o.master.intervals.int_900.bySol; }), 'gh') }
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-info" 
                icon="fa fa-thermometer-half" 
                value={  `${_.sumBy(miner.stats, function(o) { return o.master.boardsW; })} Watt` }
                title="Miner power usage"
                progressColor={ powerColor(_.meanBy(miner.stats, function(o) { return o.master.boardsW; })) }
                progressValue={ _.meanBy(miner.stats, function(o) { return o.master.boardsW; }) * 100 / 300 }
                secondaryTitle="Watts per TH/s"
                secondaryValue={ (_.meanBy(miner.stats, function(o) { return o.master.wattPerGHs; }) || 0) * 1000 }
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-gray-300" 
                icon="fa fa-exclamation-triangle" 
                value={ minerpercentageError.toFixed(1) + '%' }
                title="Hardware errors"
                progressColor={ errorsColor }
                progressValue={ minerpercentageError * 10 }
                secondaryTitle="Rejected"
                secondaryValue={ _.meanBy(miner.stats, function(o) { return o.pool.intervals.int_0.lowDifficultyShares; }) || 0 }
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-gray-200" 
                icon="fa fa-clock" 
                value={ minerUptime }
                title="Miner uptime"
                progressColor={ lastShareColor }
                progressValue={ 100 }
                secondaryTitle="Last share"
                secondaryValue={ lastShare }
              ></DashboardWidget>
            </Col>
          </Row>
        </div>

        {miner.stats &&
        <div className="animated fadeIn">
          <Row>
            <Col>
              <h4><Trans>Hashboards</Trans></h4>
              <div>
                <HashboardsTable miner={ miner }></HashboardsTable>
              </div>
            </Col>
          </Row>
        </div>
        }

        {miner.stats &&
        <div className="animated fadeIn">
          <Row>
            <Col>
              <h4><Trans>Pools</Trans></h4>
              <div>
                <PoolsTable miner={ miner }></PoolsTable>
              </div>
            </Col>
          </Row>
        </div>
        }

        <div>
          <h4><Trans>Settings</Trans></h4>        
          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className={ minerModeIcon(settings.minerMode) + ' fa text-gray'}></i></div>
                  <div className="h4 m-0 text-uppercase">{ settings.minerMode || 'Not set' }</div>
                  <div><Trans>Miner mode</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-bolt text-gray"></i></div>
                  <div className="h4 m-0">
                    { (settings.minerMode === 'custom') ?
                      <span>{settings.voltage || 0 }<small className="textmuted">%</small></span>
                      : <span>Auto</span>
                    }
                  </div>
                  <div><Trans>Miner power</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                  <div className="h4 m-0">
                    { (settings.minerMode === 'custom') ?
                      <span>{settings.frequency || 0 } <small className="textmuted">MHz</small></span>
                      : <span>Auto</span>
                    }
                  </div>
                  <div><Trans>Miner frequency</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-wind text-gray"></i></div>
                  <div className="h4 m-0">
                    { (settings.fan_low !== 40 && settings.fan_high !== 60) ?
                      <span>{ settings.fan_low }c° / { settings.fan_high }c°</span>
                      : <span>Auto</span>
                    }
                  </div>
                  <div><Trans>Fan temp settings</Trans></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingMcu: state.mcuStats.loading,
    mcu: state.mcuStats.data,
    mcuError: state.mcuStats.error,
    loadingMiner: state.minerStats.loading,
    miner: state.minerStats.data,
    minerError: state.minerStats.error,
    loadingOnline: state.minerOnline.loading,
    minerCheck: state.minerOnline.data,
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Dashboard);
