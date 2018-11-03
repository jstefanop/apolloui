import { connect } from 'react-redux'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Table,
} from 'reactstrap';

import _ from 'lodash';
import moment from 'moment';

import DashboardWidget from '../Widgets/DashboardWidget';
import DisplayHashrate from '../Filters/DisplayHashrate';

import { Trans } from '@lingui/macro';

import { fetchMcu } from '../../actions/mcu';
import { fetchMiner } from '../../actions/miner';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchMcu();
    this.props.fetchMiner();
  }

  render() {
    const { loadingMcu, mcu, loadingMiner, miner, settings } = this.props;

    if (loadingMiner) {
      return <div>Loading...</div>;
    }

    // Miner shares
    const minerTotalShares = (miner.stats.summary.data.hardwareErrors + miner.stats.summary.data.accepted + miner.stats.summary.data.rejected);
    const minerpercentageRejected = miner.stats.summary.data.rejected * minerTotalShares / 100
    const minerpercentageError = miner.stats.summary.data.hardwareErrors * minerTotalShares / 100
    let errorsColor = 'success';
    if (minerpercentageError >= 10 && minerpercentageError <= 20) errorsColor = 'warning';
    else if (minerpercentageError > 20) errorsColor = 'danger';

    // Miner uptime
    const minerUptime = moment().to(moment().subtract(miner.stats.summary.data.elapsed, 'seconds'), true);

    // Active pool
    const mainPool = _.find(miner.stats.pools.data, { stratumActive: true });

    // Last share
    let lastShare = 0,
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
                secondaryValue={(mcu.temperature / 1000).toFixed(2) + ' C°'}
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
                <Table  responsive className="table-outline d-none d-sm-table">
                  <thead className="bg-light">
                  <tr>
                    <th className="text-center"><i className="fa fa-tasks"></i></th>
                    <th><Trans>Url</Trans></th>
                    <th><Trans>Type</Trans></th>
                    <th><Trans>Status</Trans></th>
                    <th><Trans>Hashrate</Trans></th>
                    <th>CS</th>
                    <th>CA</th>
                    <th>PS</th>
                    <th>PA</th>
                    <th>CR</th>
                    <th>PR</th>
                    <th><Trans>Username</Trans></th>
                  </tr>
                  </thead>
                  <tbody className="bg-white">
                  <tr>
                    <td className="text-center">
                      <Button><Trans>Select</Trans></Button>
                    </td>
                    <td>
                      <div className="font-weight-bold text-muted">stratum+tcp://us.litecoinpool.org:3333</div>
                    </td>
                    <td className="text-center">
                      <h5 className="mb-0"><Badge color="primary">Main</Badge></h5>
                    </td>
                    <td>
                      <h5 className="mb-0"><Badge color="success">Alive</Badge></h5>
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0 font-weight-bold">140.56 MH/s</h6>
                    </td>
                    <td>123</td>
                    <td>0</td>
                    <td>45</td>
                    <td>0</td>
                    <td>67</td>
                    <td>9</td>
                    <td>futurebit.1</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <Button><Trans>Select</Trans></Button>
                    </td>
                    <td>
                      <div className="font-weight-bold text-muted">stratum+tcp://eu.multipool.us:3123</div>
                    </td>
                    <td className="text-center">
                      <h5 className="mb-0"><Badge color="light">Failover</Badge></h5>
                    </td>
                    <td>
                      <h5 className="mb-0"><Badge color="success">Alive</Badge></h5>
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">0 MH/s</h6>
                    </td>
                    <td>123</td>
                    <td>0</td>
                    <td>45</td>
                    <td>0</td>
                    <td>67</td>
                    <td>9</td>
                    <td>futurebit.1</td>
                  </tr>
                  </tbody>
                </Table>
              </div>
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
