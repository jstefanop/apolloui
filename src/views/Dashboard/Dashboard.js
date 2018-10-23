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
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import { Trans, t } from '@lingui/macro';
import { I18n } from "@lingui/react"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
                <div><Trans>Current hashrate</Trans></div>
                <Progress className="progress-xs my-3" color="primary" value="95" />
                <small className="text-muted text-truncate"><Trans>Pool</Trans>: <b>stratum+tcp://us.litecoinpool.org:3333</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-info">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-thermometer-half text-gray"></i></div>
                <div className="h4 m-0">67°C</div>
                <div><Trans>Miner temperature</Trans></div>
                <Progress className="progress-xs my-3" color="success" value="67" />
                <small className="text-muted text-truncate"><Trans>MCU temperature</Trans>: <b>57°C</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-gray-300">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-exclamation-triangle text-gray"></i></div>
                <div className="h4 m-0">20.59%</div>
                <div><Trans>Rejected shares</Trans></div>
                <Progress className="progress-xs my-3" color="warning" value="20.6" />
                <small className="text-muted text-truncate"><Trans>Errors</Trans>: <b>0.23%</b></small>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-gray-200">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-clock text-gray"></i></div>
                <div className="h4 m-0">3 days</div>
                <div><Trans>Miner uptime</Trans></div>
                <Progress className="progress-xs my-3" color="success" value="100" />
                <small className="text-muted text-truncate"><Trans>Last share</Trans>: <b>3 seconds</b> ago</small>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-hdd text-gray"></i></div>
                <div className="h4 m-0">Turbo</div>
                <div><Trans>Miner mode</Trans></div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-bolt text-gray"></i></div>
                <div className="h4 m-0">0.5V</div>
                <div><Trans>Miner voltage</Trans></div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-broadcast-tower text-gray"></i></div>
                <div className="h4 m-0">450MHz</div>
                <div><Trans>Miner frequency</Trans></div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="bg-light">
              <CardBody>
                <div className="h1 text-muted float-right"><i className="fa fa-wind text-gray"></i></div>
                <div className="h4 m-0">Auto</div>
                <div><Trans>Fan speed</Trans></div>
              </CardBody>
            </Card>
          </Col>
        </Row>

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

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          <ModalHeader className="bg-light" toggle={this.toggle}>Initial setup</ModalHeader>
          <ModalBody>
            <Trans>Welcome to the wizard setup. Here you can configure basic settings to start your miner to mine for you. You can skip this step and configure your miner later. To add more pools or change any other configuration go to the settings page after closing this modal.</Trans>
            <hr className="mb-4" />
            <div className="animated fadeIn mt-4">
              <Row>
                <Col lg="12">
                  <h5><i className="fa fa-database mr-2"></i><Trans>Setup main pool</Trans></h5>
                  <div className="small text-muted"><Trans>You can create an account on <a href="https://www.litecoinpool.org" target="_blank">Litecoinpool.org</a> and use <code>stratum+tcp://litecoinpool.org:3333</code> as pool url or you can use any other pool compatible with Scrypt algorithm.</Trans></div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={4}>
                          <FormGroup className="mb-0">
                            <Label for="poolUrl"><Trans>Pool Url</Trans></Label>
                            <Input type="text" name="poolUrl" id="poolUrl" placeholder="stratum+tcp://us.litecoinpool.org:3333" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup className="mb-0">
                            <Label for="poolUsername"><Trans>Pool Username</Trans></Label>
                            <Input type="text" name="poolUsername" id="poolUsername" placeholder="futurebit.1" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup className="mb-0">
                            <Label for="poolPassword"><Trans>Pool Password</Trans></Label>
                            <Input type="text" name="poolPassword" id="poolPassword" placeholder="x" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup className="mb-0">
                            <Label for="poolProxy"><Trans>Pool Proxy</Trans></Label>
                            <Input type="text" name="poolProxy" id="poolProxy" placeholder="http://192.168.1.1:3333" bsSize="lg" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Col>
              </Row>
            </div>
            <hr className="mb-4" />
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <h5><i className="fa fa-user mr-2"></i><Trans>Setup lockscreen password</Trans></h5>
                  <div className="small text-muted"><Trans>Please set a password for this dashboard, so only user having the password want manage your miner or look at statistics.</Trans></div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="password"><Trans>Password</Trans></Label>
                            <Input type="password" name="password" id="password" placeholder="" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="repeatPassword"><Trans>Repeat password</Trans></Label>
                            <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="" bsSize="lg" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Skip</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default Dashboard;
