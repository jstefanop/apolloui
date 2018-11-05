import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row
} from 'reactstrap';

import _ from 'lodash';
import moment from 'moment';

import { Loading, LoadingErrorBox } from '../Loading';
import DashboardWidget from '../Widgets/DashboardWidget';
import DisplayHashrate from '../Filters/DisplayHashrate';
import ModalsRawStats from '../Modals/ModalsRawStats';
import PoolsTable from '../Pools/PoolsTable';

import { Trans } from '@lingui/macro';

import { fetchMcu } from '../../actions/mcu';
import { fetchMiner } from '../../actions/miner';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsRawStats: false
    }
  }

  componentDidMount() {
    this.props.fetchMcu();
    this.props.fetchMiner();
  }

  openModalsRawStats = () => {
    this.setState({
      modalsRawStats: !this.state.modalsRawStats
    });
  }

  render() {
    const { mcu, loadingMiner, miner, settings } = this.props;

    if (loadingMiner) {
      return <Loading />;
    }

    // Miner shares
    const minerTotalShares = (miner.stats.summary.data.hardwareErrors + miner.stats.summary.data.accepted + miner.stats.summary.data.rejected);
    const minerpercentageRejected = Math.round(miner.stats.summary.data.rejected * 100 / minerTotalShares * 100) / 100
    const minerpercentageError = Math.round(miner.stats.summary.data.hardwareErrors * 100 / minerTotalShares * 100) / 100
    let errorsColor = 'success';
    if (minerpercentageError >= 10 && minerpercentageError <= 20) errorsColor = 'warning';
    else if (minerpercentageError > 20) errorsColor = 'danger';

    // Miner uptime
    const minerUptime = moment().to(moment().subtract(miner.stats.summary.data.elapsed, 'seconds'), true);

    // Active pool
    const mainPool = _.find(miner.stats.pools.data, { stratumActive: true });

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

    return (
      <div ref="main">
        <ModalsRawStats isOpen={this.state.modalsRawStats} toggle={this.openModalsRawStats}></ModalsRawStats>
        <LoadingErrorBox 
          show={false}
          bg="bg-dark"
          title="It seems there is a problem to communicate with the miner, check error message."
          subtitle="If problem persists, try to restart the miner, check the settings or try to reboot the system."
          icon="fa-exclamation-circle animated bounce"
          showBtn={false}
        />
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-dark" 
                icon="fa fa-fire" 
                value={DisplayHashrate(miner.stats.summary.data.mHSAv, 'mh')}
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
                value={miner.stats.summary.data.temperature || 0 + ' C°'}
                title="Miner temperature"
                progressColor="success"
                progressValue={miner.stats.summary.data.temperature}
                secondaryTitle="MCU temperature"
                secondaryValue={(Number(mcu.stats.temperature) / 1000).toFixed(2) + ' C°'}
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-gray-300" 
                icon="fa fa-exclamation-triangle" 
                value={minerpercentageError + '%'}
                title="Hardware errors"
                progressColor={errorsColor}
                progressValue={100 - minerpercentageError}
                secondaryTitle="Rejected"
                secondaryValue={minerpercentageRejected + '%'}
              ></DashboardWidget>
            </Col>

            <Col xs="12" md="6" xl="3">
              <DashboardWidget 
                bgColor="bg-gray-200" 
                icon="fa fa-clock" 
                value={minerUptime}
                title="Miner uptime"
                progressColor={lastShareColor}
                progressValue={100}
                secondaryTitle="Last share"
                secondaryValue={lastShare}
              ></DashboardWidget>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-hdd text-gray"></i></div>
                  <div className="h4 m-0">{settings.minerMode || 'Not set'}</div>
                  <div><Trans>Miner mode</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-bolt text-gray"></i></div>
                  <div className="h4 m-0">{settings.voltage || 0}V</div>
                  <div><Trans>Miner voltage</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                  <div className="h4 m-0">{settings.frequency || 0}MHz</div>
                  <div><Trans>Miner frequency</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-wind text-gray"></i></div>
                  <div className="h4 m-0">{(settings.fan > -1) ? settings.fan + '%' : 'Auto'}</div>
                  <div><Trans>Fan speed</Trans></div>
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
                <PoolsTable pools={miner.stats.pools} utility={miner.stats.summary.data.workUtility}></PoolsTable>
              </div>
            </Col>
          </Row>
        </div>
        <Button color="link" onClick={this.openModalsRawStats}>Raw stats</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingMcu: state.mcuStats.loading,
    mcu: state.mcuStats.data,
    loadingMiner: state.minerStats.loading,
    miner: state.minerStats.data,
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMcu: () => {
      dispatch(fetchMcu())
    },
    fetchMiner: () => {
      dispatch(fetchMiner())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
