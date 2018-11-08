import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Alert,
  Button,
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

import { wifiScanMcu, wifiConnectMcu } from '../../../actions/mcu';
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

  handleConnect = () => {
    const { wifiConnectMcu } = this.props;
    this.setState({ connected: true });

    wifiConnectMcu({ ssid: this.state.ssid, passphrase: this.state.wifiPassword });
  }

  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { loadingWifiScan, loadingWifiConnect, wifiError, wifis, address } = this.props

    const { wifiPassword, ssid, connected } = this.state

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle><Trans>Wifi</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Connect your system controller to a Wifi instead using ethernet</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md={6}>
                        <div>
                          <div className="clearfix">
                            <h4>
                              <Button 
                                className="float-left mr-2 text-uppercase" 
                                color={'primary'} 
                                size="sm"
                                onClick={ this.handleScan }
                              ><Trans>Scan</Trans></Button><Trans>Look for Wifi</Trans>
                            </h4>
                            <div className="mt-1">
                              <p className="text-muted ">
                                <Trans>Clicking the button your system will scan for available wifi networks. Be aware that connecting to a Wifi network you will need to connect to the new Wifi IP address you have to find in your LAN.</Trans>
                              </p>
                            </div>
                            { (ssid && !connected) ?
                              <Form className="mt-4">
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
                                    <Alert color="warning"><Trans>There was a problem connecting to the wifi, please doucle check the password. <b>{wifiError}</b></Trans></Alert>
                                    : <Alert color="success"><Trans>Your controller should be connected to <b>{ ssid }</b> Wifi now. Try to go to <a href={'http://' + address} className="font-weight-bold">{ address }</a> before disconnecting the ethernet cable.</Trans></Alert>
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
                        { (loadingWifiScan) ?
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
    loadingWifiConnect: state.mcuWifiConnect.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    wifiScanMcu: () => {
      dispatch(wifiScanMcu())
    },
    wifiConnectMcu: ({ ssid, passphrase }) => {
      dispatch(wifiConnectMcu({ ssid, passphrase }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsWifi);
