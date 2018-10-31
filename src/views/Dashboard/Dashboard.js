import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Progress,
  Row,
  Table,
} from 'reactstrap';

import { Trans } from '@lingui/macro';

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      widgetClasses: 'd-inline-block text-muted text-truncate'
    }
  }

  updateDimensions() { 
    const widgets = ReactDOM.findDOMNode(this.refs.main).getElementsByClassName('widget');
    const smallWidth = (widgets[0] && widgets[0].offsetWidth && widgets[0].offsetWidth <= 280) || false;
    let widgetClasses = this.state.widgetClasses;

    if (smallWidth) widgetClasses += ' small-width'

    this.setState({ widgetClasses: widgetClasses });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {

    return (
      <div ref="main">
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-dark">
                <CardBody className="widget">
                  <div className="h1 text-muted float-right"><i className="fa fa-fire text-gray"></i></div>
                  <div className="h4 m-0">135.87 MH/s</div>
                  <div><Trans>Current hashrate</Trans></div>
                  <Progress className="progress-xs my-3" color="primary" value="95" />
                  <small className={this.state.widgetClasses}><Trans>Pool</Trans>: <b>stratum+tcp://us.litecoinpool.org:3333</b></small>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-info">
                <CardBody className="widget">
                  <div className="h1 text-muted float-right"><i className="fa fa-thermometer-half text-gray"></i></div>
                  <div className="h4 m-0">67°C</div>
                  <div><Trans>Miner temperature</Trans></div>
                  <Progress className="progress-xs my-3" color="success" value="67" />
                  <small className={this.state.widgetClasses}><Trans>MCU temperature</Trans>: <b>57°C</b></small>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-gray-300">
                <CardBody className="widget">
                  <div className="h1 text-muted float-right"><i className="fa fa-exclamation-triangle text-gray"></i></div>
                  <div className="h4 m-0">20.59%</div>
                  <div><Trans>Rejected shares</Trans></div>
                  <Progress className="progress-xs my-3" color="warning" value="20.6" />
                  <small className={this.state.widgetClasses}><Trans>Errors</Trans>: <b>0.23%</b></small>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-gray-200">
                <CardBody className="widget">
                  <div className="h1 text-muted float-right"><i className="fa fa-clock text-gray"></i></div>
                  <div className="h4 m-0">3 days</div>
                  <div><Trans>Miner uptime</Trans></div>
                  <Progress className="progress-xs my-3" color="success" value="100" />
                  <small className={this.state.widgetClasses}><Trans>Last share</Trans>: <b>3 seconds</b> ago</small>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-hdd text-gray"></i></div>
                  <div className="h4 m-0">Turbo</div>
                  <div><Trans>Miner mode</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-bolt text-gray"></i></div>
                  <div className="h4 m-0">0.5V</div>
                  <div><Trans>Miner voltage</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                  <div className="h4 m-0">450MHz</div>
                  <div><Trans>Miner frequency</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6" xl="3">
              <Card className="bg-light">
                <CardBody>
                  <div className="h1 text-muted float-right"><i className="fa fa-wind text-gray"></i></div>
                  <div className="h4 m-0">Auto</div>
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

export default Dashboard;
