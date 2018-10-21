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
import { Trans, t } from '@lingui/macro';
import { I18n } from "@lingui/react"

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
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader className="bg-dark">
                    <Button size="sm" className="btn-warning text-uppercase"><Trans>Restart</Trans></Button>
                    <span className="ml-2"><Trans>You need to restart your miner to apply changes.</Trans></span>
                  </CardHeader>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle><Trans>Pools</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Manage pools configuration for your miner</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="poolUrl"><Trans>Pool Url</Trans></Label>
                            <Input type="text" name="poolUrl" id="poolUrl" placeholder={i18n._(t`stratum+tcp://us.litecoinpool.org:3333`)} bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="poolUsername"><Trans>Pool Username</Trans></Label>
                            <Input type="text" name="poolUsername" id="poolUsername" placeholder="futurebit.1" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="poolPassword"><Trans>Pool Password</Trans></Label>
                            <Input type="text" name="poolPassword" id="poolPassword" placeholder="x" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="poolProxy"><Trans>Pool Proxy</Trans></Label>
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
                    <CardTitle><Trans>Miner</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Manage miner specific configurations</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'primary'} defaultChecked size={''}/>
                              <h4><i className="fa fa-paper-plane mr-2 initialism text-secondary"></i><Trans>ECO mode</Trans></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                <Trans>In ECO mode your miner will consume less power (about <b>1.0W/MHs</b>) but its hashrate will be slower. This mode is recommende if you want have less noise and less possible to overheat your miner.</Trans>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} checked={false} size={''}/>
                              <h4><i className="fa fa-rocket mr-2 initialism text-secondary"></i><Trans>TURBO mode</Trans></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                <Trans>In Turbo mode your miner will consume more power (about <b>1.4W/MHs</b>) and so its hashrate will be faster. This mode is good to gain the maximum profit but you need to take care of possible overheat.</Trans>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'warning'} checked={false} size={''}/>
                              <h4><i className="fa fa-diagnoses mr-2 initialism text-secondary"></i><Trans>Custom mode</Trans></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                <Trans>In custom mode you can control frequency and voltage of your miner for your specific needs. This mode is for expert users and is not recommended if you don't know what you are doing. You could harm your miner.</Trans>
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
                    <CardTitle><Trans>Wifi</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Connect your system controller to a Wifi instead using ethernet</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={4}>
                          <div>
                            <div className="clearfix">
                              <h4><Button className="float-left mr-2 text-uppercase" color={'primary'} size="sm"><Trans>Scan</Trans></Button><Trans>Look for Wifi</Trans></h4>
                            </div>
                            <div className="mt-1">
                              <p className="text-muted ">
                                <Trans>Clicking the button your system will scan for available wifi networks. Be aware that connecting to a Wifi network you will need to connect to the new Wifi IP address you have to find in your LAN.</Trans>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={8}>
                          <div>
                            <div className="clearfix">
                              <h4><i className="fa fa-wifi mr-2 initialism text-secondary"></i><Trans>Wifi networks</Trans></h4>
                            </div>
                            <div className="">
                              <p className="text-muted ">
                                <Trans>There are no wifi networks available yet. Please click the scan button to look at them.</Trans>
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
                  <CardTitle><Trans>Change lockscreen password</Trans></CardTitle>
                  <CardSubtitle className="text-muted"><Trans>Change the password to access the dashboard</Trans></CardSubtitle>
                </CardHeader>
                <CardBody>
                  <p className="help-block form-text text-muted">
                    <Trans>Changing the password will lock the dashboard. You will need to use the new password to unlock it.</Trans>
                  </p>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="password"><Trans>Password</Trans></Label>
                          <Input type="password" name="password" id="password" placeholder="" bsSize="lg" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="repeatPassword"><Trans>Repeat password</Trans></Label>
                          <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="" bsSize="lg" />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <Button className="mr-2 text-uppercase" color={'primary'} size="sm"><Trans>Change</Trans></Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle><Trans>Layout options</Trans></CardTitle>
                  <CardSubtitle className="text-muted"><Trans>Manage dashboard specific configurations</Trans></CardSubtitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <ListGroup flush>
                          <ListGroupItem>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} dataOn="°C" dataOff="°F" label color={'success'} defaultChecked size={''}/>
                              <div><Trans>Temperature unit</Trans></div>
                            </div>
                            <div className="mt-1 small text-muted"><Trans>Change temperature unit from Celsius to Fahrenheit</Trans></div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={''}/>
                              <div><Trans>Sidebar</Trans></div>
                            </div>
                            <div className="mt-1 small text-muted"><Trans>Keep left sidebar open or closed by default</Trans></div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="clearfix">
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={''}/>
                              <div><Trans>Sidenav</Trans></div>
                            </div>
                            <div className="mt-1 small text-muted"><Trans>Keep right sidebar open or closed by default</Trans></div>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle><Trans>Backup & Reset</Trans></CardTitle>
                  <CardSubtitle className="text-muted"><Trans>Use this tools to backup, restore and reset configurations</Trans></CardSubtitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <ListGroup flush>
                          <ListGroupItem>
                            <div className="">
                              <Button className="mr-2 text-uppercase" color={'primary'} size="sm"><Trans>Backup</Trans></Button>
                              <div className="mt-1 small text-muted"><Trans>Create a backup file of dashboard, miner and pools configurations</Trans></div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="">
                              <Button className="mr-2 text-uppercase" color={'primary'} size="sm"><Trans>Restore</Trans></Button>
                              <div className="mt-1 small text-muted"><Trans>Restore all configurations from a backup file</Trans></div>
                            </div>
                          </ListGroupItem>
                          <ListGroupItem>
                            <div className="">
                              <Button className="mr-2 text-uppercase" color={'danger'} size="sm"><Trans>Reset</Trans></Button>
                              <div className="mt-1 small text-muted"><Trans>Reset all configurations to factory default</Trans></div>
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
        )}
      </I18n>
    );
  }
}

export default Settings;
