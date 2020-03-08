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
import { convertTemp, displayHashrate, minerModeIcon, tempColor } from '../Filters';
import PoolsTable from '../Pools/PoolsTable';

import { Trans } from '@lingui/macro';

class Node extends Component {

  render() {
    const { minerCheck, minerError, mcuError, mcu, miner, settings } = this.props;

    // Miner shares
    const minerpercentageRejected = miner.stats.summary.data.deviceRejected;
    const minerpercentageError = miner.stats.summary.data.deviceHardware;
    let errorsColor = 'success';
    if (minerpercentageError >= 5 && minerpercentageError <= 7.5) errorsColor = 'warning';
    else if (minerpercentageError > 7.5) errorsColor = 'danger';

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
                value={ displayHashrate(miner.stats.summary.data.workUtility * 71582788, 'h') }
                title="Current hashrate"
                progressColor="primary"
                progressValue="100"
                secondaryTitle="Pool"
                secondaryValue={(mainPool && mainPool.url) ? mainPool.url : 'Nothing active'}
              ></DashboardWidget>
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

export default connect(mapStateToProps)(Node);
