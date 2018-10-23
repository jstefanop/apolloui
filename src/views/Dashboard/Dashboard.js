import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="bg-dark">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-fire text-gray"></i></div>
                <div className="h4 m-0">135.87 MH/s</div>
                <div>Current hashrate</div>
                <hr className="bg-gray" />
                <small className="text-muted">Pool: <b>stratum+tcp://us.litecoinpool.org:3333</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-info">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-thermometer-half text-gray"></i></div>
                <div className="h4 m-0">67°C</div>
                <div>Miner temperature</div>
                <hr />
                <small className="text-muted">MCU temperature: <b>57°C</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-gray-300">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-exclamation-triangle text-gray"></i></div>
                <div className="h4 m-0">0.59%</div>
                <div>Rejected shares</div>
                <hr />
                <small className="text-muted">Errors: <b>0.23%</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-gray-200">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-clock text-gray"></i></div>
                <div className="h4 m-0">3 days</div>
                <div>Miner uptime</div>
                <hr />
                <small className="text-muted">Last share: <b>3 seconds</b> ago</small>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-rocket text-gray"></i></div>
                <div className="h4 m-0">Turbo</div>
                <div>Miner mode</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-bolt text-gray"></i></div>
                <div className="h4 m-0">0.5V</div>
                <div>Miner voltage</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                <div className="h4 m-0">450MHz</div>
                <div>Miner frequency</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-wind text-gray"></i></div>
                <div className="h4 m-0">Auto</div>
                <div>Fan speed</div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Pools</h4>
            <div>
              <Table  responsive className="table-outline d-none d-sm-table">
                <thead className="thead-light">
                <tr>
                  <th className="text-center"><i className="fa fa-tasks"></i></th>
                  <th>Url</th>
                  <th className="text-center">Type</th>
                  <th>Status</th>
                  <th className="text-center">Hashrate</th>
                  <th>CS</th>
                  <th>CA</th>
                  <th>PS</th>
                  <th>PA</th>
                  <th>CR</th>
                  <th>PR</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                <tr>
                  <td className="text-center">
                    <Button>Select</Button>
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
                    <Button>Select</Button>
                  </td>
                  <td>
                    <div className="font-weight-bold text-muted">stratum+tcp://eu.multipool.us:3123</div>
                  </td>
                  <td className="text-center">
                    <h5 className="mb-0"><Badge color="gray">Failover</Badge></h5>
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
    );
  }
}

export default Dashboard;
