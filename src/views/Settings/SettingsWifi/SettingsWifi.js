import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Alert,
  Button,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Progress
} from 'reactstrap';

import { wifiScanMcu, wifiConnectMcu, wifiDisconnectMcu } from '../../../actions/mcu';
import { percentColor } from '../../Filters';

import { Loading } from '../../Loading';
import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class SettingsWifi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ssid: null,
      wifiPassword: '',
      connected: null
    };
  }

  handleScan = () => {
    const { wifiScanMcu } = this.props;

    wifiScanMcu();
  }

  handleClick = (ssid) => {
    this.setState({
      ssid: ssid,
      connected: null
    });
  }

  handleConnect = (event) => {
    const { wifiConnectMcu } = this.props;
    this.setState({ connected: true });

    wifiConnectMcu({ ssid: this.state.ssid, passphrase: this.state.wifiPassword });

    event.preventDefault();
  }

  handleDisconnect = () => {
    const { wifiDisconnectMcu } = this.props;
    this.setState({
      ssid: null,
      connected: false
    });

    wifiDisconnectMcu();
  }

  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { loadingWifiScan, loadingWifiConnect, loadingWifiDisconnect, wifiError, wifis, address, mcu } = this.props

    const { wifiPassword, ssid, connected } = this.state

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <i className="fa fa-wifi mr-2"></i><Trans>Wifi</Trans>
                    </CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Connect your system controller to a Wifi instead using ethernet</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md={6}>
                        <div>
                          <div className="clearfix">
                            <h4>
                              { (mcu.stats.activeWifi) && ( <div className="d-inline mr-2"><small className="text-muted">Active wifi</small> <Badge color="success" pill>{ mcu.stats.activeWifi }</Badge></div>) }
                              <div className={ mcu.stats.activeWifi ? 'd-inline' : 'd-inline-block'}>
                                <Button 
                                  className="float-left mr-2 text-uppercase" 
                                  color={'warning'} 
                                  size="sm"
                                  disabled={ loadingWifiDisconnect }
                                  onClick={ this.handleDisconnect }
                                ><Trans>Disconnect</Trans></Button>
                                <Button 
                                  className="float-left mr-2 text-uppercase" 
                                  color={'primary'} 
                                  size="sm"
                                  disabled={ loadingWifiDisconnect }
                                  onClick={ this.handleScan }
                                ><Trans>Scan</Trans></Button>
                              </div>
                            </h4>
                            <div className="mt-1">
                              <p className="text-muted ">
                                <Trans>Clicking the button your system will scan for available wifi networks. Clicking one of the available ssid will require to input the passphrase. Clicking the disconnect button will delete every wifi connections, if you are in trouble try to click disconnect before trying anything else.</Trans>
                              </p>
                            </div>
                            { (ssid && !connected) ?
                              <Form onSubmit={this.handleConnect} className="mt-4">
                                <Row form>
                                  <Col md={12}>
                                    <FormGroup>
                                      <Label for="wifiPassword"><Trans>Wifi <b>{ ssid }</b> Password</Trans></Label>
                                      <Input
                                        type="password"
                                        name="wifiPassword"
                                        id="wifiPassword"
                                        value={ wifiPassword }
                                        onChange={ this.onChange }
                                        bsSize="lg"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={12}>
                                    <Button className="mr-2 text-uppercase" color="primary" size="sm" onClick={ this.handleConnect }><Trans>Connect</Trans></Button>
                                  </Col>
                                </Row>
                              </Form>
                              : null
                            }
                            { connected && (
                              <div className="text-muted lead">
                                { (loadingWifiConnect) ?
                                  <Loading />
                                  :
                                  (wifiError) ?
                                    <Alert color="warning">There was a problem connecting to the wifi, please doucle check the password. <b>{ wifiError }</b></Alert>
                                    : <Alert color="success">Your controller should be connected to <b>{ ssid }</b> Wifi now. Try to go to <a href={'http://' + address} className="font-weight-bold">{ address }</a> before disconnecting the ethernet cable.</Alert>
                                }
                              </div>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <div className="clearfix">
                            <h4><i className="fa fa-wifi mr-2 initialism text-secondary"></i><Trans>Wifi networks</Trans></h4>
                          </div>
                        { (loadingWifiScan || loadingWifiDisconnect) ?
                          <Loading />
                          : 
                            (!wifis || !wifis.length) ?
                              <div className="">
                                <p className="text-muted ">
                                  <Trans>There are no wifi networks available yet. Please click the scan button to look at them.</Trans>
                                </p>
                              </div>
                            :
                              <ListGroup>
                                { wifis.map((wifi, index) => {
                                  return <ListGroupItem key={ index } className="border-0">
                                    <Button color="link" className="p-0" onClick={() => { this.handleClick(wifi.ssid) } }>{ wifi.ssid }</Button>
                                    <Progress className="progress-xs" color={ percentColor(wifi.signal, 'inverse') } value={ wifi.signal } />
                                    <small className="text-muted">Signal <b>{ wifi.signal }%</b></small>
                                  </ListGroupItem>
                                })}
                              </ListGroup>
                        }
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </I18n>
    );
  }
}

const mapStateToProps = state => {
  return {
    wifis: state.mcuWifiScan.data,
    loadingWifiScan: state.mcuWifiScan.loading,
    address: state.mcuWifiConnect.data,
    wifiError: state.mcuWifiConnect.error,
    loadingWifiConnect: state.mcuWifiConnect.loading,
    loadingWifiDisconnect: state.mcuWifiDisconnect.loading,
    mcu: state.mcuStats.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    wifiScanMcu: () => {
      dispatch(wifiScanMcu())
    },
    wifiConnectMcu: ({ ssid, passphrase }) => {
      dispatch(wifiConnectMcu({ ssid, passphrase }))
    },
    wifiDisconnectMcu: () => {
      dispatch(wifiDisconnectMcu())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsWifi);
