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
import { displayHashrate, minerModeIcon, tempColor } from '../Filters';
import PoolsTable from '../Pools/PoolsTable';

import { Trans } from '@lingui/macro';

class Dashboard extends Component {

  render() {
    const { minerCheck, minerError, mcuError, mcu, miner, settings } = this.props;

    // Miner shares
    const minerTotalShares = (miner.stats.summary.data.hardwareErrors + miner.stats.summary.data.accepted + miner.stats.summary.data.rejected);
    const minerpercentageRejected = parseFloat(Math.round(miner.stats.summary.data.rejected * 100 / minerTotalShares * 100) / 100);
    const minerpercentageError = parseFloat(Math.round(miner.stats.summary.data.hardwareErrors * 100 / minerTotalShares * 100) / 100);
    let errorsColor = 'success';
    if (minerpercentageError >= 10 && minerpercentageError <= 20) errorsColor = 'warning';
    else if (minerpercentageError > 20) errorsColor = 'danger';

    // Miner uptime
    const minerUptime = moment().to(moment().subtract(miner.stats.summary.data.elapsed, 'seconds'), true);

    // Active pool
    const mainPool = _.find(miner.stats.pools.data, function(o) { return o.lastShareTime > 0 && o.stratumActive === true; });

    // Last share
    let lastShare = 'Not available',
        lastShareTime = 0,
        lastShareColor = 'success';
    const timestamp = moment().format('X');
    if (mainPool && mainPool.lastShareTime) {
      lastShare = moment().to(moment(mainPool.lastShareTime, 'X'));
      lastShareTime = mainPool.lastShareTime;
    }
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
                value={ displayHashrate(miner.stats.summary.data.mHSAv, 'mh') }
                title="Current hashrate"
                progressColor="primary"
                progressValue="100"
                secondaryTitle="Pool"
                secondaryValue={(mainPool && mainPool.url) ? mainPool.url : 'Nothing active'}
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-info" 
                icon="fa fa-thermometer-half" 
                value={ (mcu.stats.minerTemperature || 0) + '°C' }
                title="Miner temperature"
                progressColor={ tempColor(mcu.stats.minerTemperature) }
                progressValue={ mcu.stats.minerTemperature || 0 }
                secondaryTitle="MCU temperature"
                secondaryValue={ (Number(mcu.stats.temperature) / 1000).toFixed(2) + '°C' }
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-gray-300" 
                icon="fa fa-exclamation-triangle" 
                value={ minerpercentageError + '%' }
                title="Hardware errors"
                progressColor={ errorsColor }
                progressValue={ 100 - minerpercentageError }
                secondaryTitle="Rejected"
                secondaryValue={ minerpercentageRejected + '%' }
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

          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{ miner.stats.summary.data.accepted }</div>
                  <div><Trans>Accepted</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{ miner.stats.summary.data.rejected }</div>
                  <div><Trans>Rejected</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{ miner.stats.summary.data.discarded }</div>
                  <div><Trans>Discarded</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{ miner.stats.summary.data.hardwareErrors }</div>
                  <div><Trans>HW Errors</Trans></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="animated fadeIn">
          <Row>
            <Col>
              <h4><Trans>Pools</Trans></h4>
              <div>
                <PoolsTable pools={ miner.stats.pools } utility={ miner.stats.summary.data.workUtility }></PoolsTable>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <h4><Trans>Settings</Trans></h4>        
          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className={ minerModeIcon(settings.minerMode) + ' fa text-gray'}></i></div>
                  <div className="h4 m-0">{ settings.minerMode || 'Not set' }</div>
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
                      <span>{settings.voltage || 0 }<small className="textmuted">V</small></span>
                      : <span>Auto</span>
                    }
                  </div>
                  <div><Trans>Miner voltage</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                  <div className="h4 m-0">
                    { (settings.minerMode === 'custom') ?
                      <span>{settings.frequency || 0 }<small className="textmuted">MHz</small></span>
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
                  <div className="h4 m-0">{ mcu.stats.minerFanSpeed }<small className="textmuted">Rpm</small></div>
                  <div><Trans>Fan speed</Trans></div>
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
