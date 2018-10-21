import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Button,
  CardDeck,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Progress,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { Trans } from '@lingui/macro';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader className="bg-dark">
                <Button size="sm" className="btn-warning"><Trans>RESTART</Trans></Button>
                <span className="ml-2">You need to restart your miner to apply changes.</span>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle>Pools</CardTitle>
                <CardSubtitle className="text-muted">Manage pools configuration for your miner</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="poolUrl">Pool Url</Label>
                        <Input type="text" name="poolUrl" id="poolUrl" placeholder="stratum+tcp://us.litecoinpool.org:3333" bsSize="lg" />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="poolUsername">Pool Username</Label>
                        <Input type="text" name="poolUsername" id="poolUsername" placeholder="futurebit.1" bsSize="lg" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="poolPassword">Pool Password</Label>
                        <Input type="text" name="poolPassword" id="poolPassword" placeholder="x" bsSize="lg" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="poolProxy">Pool Proxy</Label>
                        <Input type="text" name="poolProxy" id="poolProxy" placeholder="http://192.168.1.1:3333" bsSize="lg" />
                      </FormGroup>
                    </Col>
                    <Col md={1}>
                      <FormGroup>
                        <Button size="lg" className="btn-light" style={{ marginTop: '29px' }}><i className="fa fa-plus"></i></Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle>Miner</CardTitle>
                <CardSubtitle className="text-muted">Manage miner specific configurations</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form>
                    <Col md={4}>
                      <div>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} label color={'primary'} defaultChecked size={'md'}/>
                          <h4><i className="fa fa-paper-plane mr-2 initialism text-secondary"></i>ECO mode</h4>
                        </div>
                        <div>
                          <p className="text-muted ">In ECO mode your miner will consume less power (about <b>1.0W/MHs</b>) but its hashrate will be slower. This mode is recommende if you want have less noise and less possible to overheat your miner.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} checked={false} size={'md'}/>
                          <h4><i className="fa fa-rocket mr-2 initialism text-secondary"></i>TURBO mode</h4>
                        </div>
                        <div>
                          <p className="text-muted ">In Turbo mode your miner will consume more power (about <b>1.4W/MHs</b>) and so its hashrate will be faster. This mode is good to gain the maximum profit but you need to take care of possible overheat.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} label color={'warning'} checked={false} size={'md'}/>
                          <h4><i className="fa fa-diagnoses mr-2 initialism text-secondary"></i>Custom mode</h4>
                        </div>
                        <div>
                          <p className="text-muted ">In custom mode you can control frequency and voltage of your miner for your specific needs. This mode is for expert users and is not recommended if you don't know what you are doing. You could harm your miner.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle>Wifi</CardTitle>
                <CardSubtitle className="text-muted">Connect your system controller to a Wifi instead using ethernet</CardSubtitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form>
                    <Col md={4}>
                      <div>
                        <div className="clearfix">
                          <h4><Button className="float-left mr-2" color={'primary'} size="sm">SCAN</Button>Look for Wifi</h4>
                        </div>
                        <div className="mt-1">
                          <p className="text-muted ">
                            Clicking the button your system will scan for available wifi networks. Be aware that connecting to a Wifi network you will need to connect to the new Wifi IP address you have to find in your LAN.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={8}>
                      <div>
                        <div className="clearfix">
                          <h4><i className="fa fa-wifi mr-2 initialism text-secondary"></i>Wifi networks</h4>
                        </div>
                        <div className="">
                          <p className="text-muted ">There are no wifi networks available yet. Please click the scan button to look at them.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardDeck>
          <Card>
            <CardHeader>
              <CardTitle>Change lockscreen password</CardTitle>
              <CardSubtitle className="text-muted">Change the password to access the dashboard</CardSubtitle>
            </CardHeader>
            <CardBody>
              <p class="help-block form-text text-muted">Changing the password will lock the dashboard. You will need to use the new password to unlock it.</p>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input type="password" name="password" id="password" placeholder="" bsSize="lg" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="repeatPassword">Repeat password</Label>
                      <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="" bsSize="lg" />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <Button className="mr-2" color={'primary'} size="sm">CHANGE</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Layout options</CardTitle>
              <CardSubtitle className="text-muted">Manage dashboard specific configurations</CardSubtitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={12}>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} dataOn="°C" dataOff="°F" label color={'success'} defaultChecked size={'md'}/>
                          <div>Temperature unit</div>
                        </div>
                        <div class="mt-1 small text-muted">Change temperature unit from Celsius to Fahrenheit</div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={'md'}/>
                          <div>Sidebar</div>
                        </div>
                        <div class="mt-1 small text-muted">Keep left sidebar open or closed by default</div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={'md'}/>
                          <div>Sidenav</div>
                        </div>
                        <div class="mt-1 small text-muted">Keep right sidebar open or closed by default</div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backup & Reset</CardTitle>
              <CardSubtitle className="text-muted">Use this tools to backup, restore and reset configurations</CardSubtitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={12}>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="">
                          <Button className="mr-2" color={'primary'} size="sm">BACKUP</Button>
                          <div class="mt-1 small text-muted">Create a backup file of dashboard, miner and pools configurations</div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="">
                          <Button className="mr-2" color={'primary'} size="sm">RESTORE</Button>
                          <div class="mt-1 small text-muted">Restore all configurations from a backup file</div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="">
                          <Button className="mr-2" color={'danger'} size="sm">RESET</Button>
                          <div class="mt-1 small text-muted">Reset all configurations to factory default</div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </CardDeck>
        <p></p>
      </div>
    );
  }
}

export default Settings;
