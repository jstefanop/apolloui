import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

class SettingsMiner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoFan: (props.fan_low === 40 && props.fan_high === 60) || false
    };

    this.marks = {
      voltage: {
        min: 30,
        max: 95,
        step: 1,
        data: {
          30: 'Min',
          40: '40%',
          50: '50%',
          60: '60%',
          70: '70%',
          80: '80%',
          90: '90%',
          95: 'Max'
        }
      },
      frequency: {
        min: 25,
        max: 60,
        step: 1,
        data: {
          25: 'Min',
          32: '32',
          39: '39',
          46: '46',
          53: '53',
          60: 'Max'
        }
      },
      fan_low: {
        min: 40,
        max: 70,
        steps: 5,
        data: {
          40: 'Min',
          50: '50°c',
          60: '60°c',
          70: 'Max',
        }
      },
      fan_high: {
        min: 60,
        max: 90,
        steps: 5,
        data: {
          60: 'Min',
          70: '70°c',
          80: '80°c',
          90: 'Max',
        }
      }
    };

    this.onSelect = this.onSelect.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
  }

  onReset(option) {
    const {
      onChange,
    } = this.props;
    if (option === 'voltage') onChange({ name: 'voltage', value: 30});
    if (option === 'frequency') onChange({ name: 'frequency', value: 25});
  }

  onSelect(mode) {
    const {
      onChange,
    } = this.props;
    onChange({ name: mode.name, value: mode.value });
  }

  onSwitch(mode) {
    const {
      onChange,
    } = this.props;
    this.setState({
      [mode.name]: mode.value,
    });
    if (mode.value) {
      onChange({ name: 'fan_low', value: 40});
      onChange({ name: 'fan_high', value: 60});
    }
  }

  render() {
    const {
      minerMode,
      voltage,
      fan_low,
      fan_high,
      frequency,
      apiAllow,
      onChange,
      agree
    } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              { /* Miner */ }
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <CardTitle><i className="fa fa-hdd mr-2"></i><Trans>Miner</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Manage miner specific configurations</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col lg={12} xl={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch
                                className="float-left mr-2"
                                variant="pill"
                                label
                                color="success"
                                checked={minerMode === 'eco'}
                                size=""
                                onChange={() => this.onSelect({ value: 'eco', name: 'minerMode' })}
                                disabled={minerMode === 'eco'}
                              />
                              <h4>
                                <i className="fa fa-leaf mr-2 initialism text-secondary" />
                                <Trans>ECO</Trans>
                              </h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>In ECO mode your miner will consume less power (about <b>1.0W/MHs</b>) but its hashrate will be slower.</Trans>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} xl={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch
                                className="float-left mr-2"
                                variant="pill"
                                label
                                color="primary"
                                checked={minerMode === 'balanced'}
                                size=""
                                onChange={() => this.onSelect({ value: 'balanced', name: 'minerMode' })}
                                disabled={minerMode === 'balanced'}
                              />
                              <h4>
                                <i className="fa fa-balance-scale mr-2 initialism text-secondary" />
                                <Trans>BALANCED</Trans>
                              </h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>In BALANCED mode your miner will consume a bit more power (about <b>1.2W/MHs</b>) and its hashrate will be a bit faster.</Trans>
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} xl={4}>
                          <div>
                            <div className="clearfix">
                              <AppSwitch
                                className="float-left mr-2"
                                variant="pill"
                                label
                                color="warning"
                                checked={minerMode === 'turbo'}
                                size=""
                                onChange={() => this.onSelect({ value: 'turbo', name: 'minerMode' })}
                                disabled={minerMode === 'turbo'}
                              />
                              <h4>
                                <i className="fa fa-rocket mr-2 initialism text-secondary" />
                                <Trans>TURBO</Trans>
                              </h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>In Turbo mode your miner will consume more power (about <b>1.4W/MHs</b>) and so its hashrate will be faster.</Trans>
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
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <AppSwitch
                      className="float-left mr-2"
                      variant="pill"
                      label
                      color="danger"
                      checked={minerMode === 'custom'}
                      size=""
                      onChange={() => this.onSelect({ value: 'custom', name: 'minerMode' })}
                      disabled={minerMode === 'custom'}
                    />
                    <CardTitle><i className="fa fa-diagnoses mr-2"></i><Trans>Miner custom mode</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><i className="fa fa-exclamation-triangle mr-2 mt-2"></i><Trans>DANGER zone!</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <div className="lead">
                      <p className="text-muted ">
                        <Trans>The Apollo comes with tuned preset values (look above) which offer a good range of operating modes, by selecting custom you risk damaging your device and FutureBit will not be responsible for any or all damage caused by over-clocking or over-volting</Trans>
                      </p>
                    </div>
                    {
                    minerMode === 'custom'
                    && (
                    <Form>
                      <Row form>
                        <Col lg={12} xl={6}>
                          <div>
                            <div className="clearfix">
                              <h4><Trans>Power</Trans> <b>{voltage}<span className="small">%</span></b></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>You can set your miner custom power or <Button color="link" onClick={() => this.onReset('voltage')}>reset</Button> to default value.</Trans>
                              </p>
                              <Card className="border-0">
                                <CardBody>
                                  <Slider
                                    min={this.marks.voltage.min}
                                    max={this.marks.voltage.max}
                                    marks={this.marks.voltage.data}
                                    step={this.marks.voltage.step}
                                    value={voltage}
                                    onChange={val => onChange({ value: val, name: 'voltage' })}
                                  />
                                </CardBody>
                              </Card>
                              {voltage >= 75 &&
                                <Card>
                                  <CardHeader className="bg-red">
                                    <div className="text-white">The FutureBit APU-200 Power Supply is limited to 75% power, going beyond this will cause your system to shutdown. You accept that Futurebit will not cover any warranty claims past 75% power, and that you are using an external ATX power supply that is capable of at least 300 watts per unit and BOTH 6 pin connectors are plugged in</div>
                                    <div className="custom-control custom-checkbox mt-2 font-weight-bold">
                                      <input type="checkbox" className="custom-control-input" id="customCheck1" checked={agree} onChange={() => onChange({ value: !agree, name: 'agree' })} />
                                      <label className="custom-control-label text-white" htmlFor="customCheck1">I read and accept</label>
                                    </div>
                                  </CardHeader>
                                </Card>
                              }
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} xl={6}>
                          <div>
                            <div className="clearfix">
                              <h4><Trans>Frequency</Trans> <b>{frequency}<span className="small"></span></b></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>You can set your miner custom frequency or <Button color="link" onClick={() => this.onReset('frequency')}>reset</Button> to default value.</Trans>
                              </p>
                              <Card className="border-0">
                                <CardBody>
                                  <Slider
                                    min={this.marks.frequency.min}
                                    max={this.marks.frequency.max}
                                    marks={this.marks.frequency.data}
                                    step={this.marks.frequency.step}
                                    value={frequency}
                                    onChange={val => onChange({ value: val, name: 'frequency' })}
                                  />
                                </CardBody>
                              </Card>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                    )
                  }
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <AppSwitch
                        className="float-left mr-2"
                        variant="pill"
                        label
                        color="success"
                        checked={this.state.autoFan}
                        size=""
                        onChange={() => this.onSwitch({ value: !this.state.autoFan, name: 'autoFan' })}
                      />
                      <Badge size="sm" color={this.state.autoFan ? 'success' : 'disabled'}>{this.state.autoFan ? 'Auto' : 'Manual'}</Badge>
                      <i className="fa fa-wind mr-2 ml-2"></i><Trans>Miner fan speed</Trans>
                    </CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Adjust the fan speed or set it automatic</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <div className="lead">
                      <p className="text-muted ">
                        <Trans>The Apollo comes with auto tuned fan speed, but you can set a custom curve by toggling auto to off.</Trans>
                      </p>
                    </div>
                    {!this.state.autoFan &&
                      <Form>
                        <Row form>
                          <Col lg={12} xl={6}>
                            <div>
                              <div className="clearfix">
                                <h4>Temperature to start fan <b>{fan_low}<span className="small">°c</span></b></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>This is the temperature needed to start the fan.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider
                                      min={this.marks.fan_low.min}
                                      max={this.marks.fan_low.max}
                                      step={5}
                                      marks={this.marks.fan_low.data}
                                      value={fan_low}
                                      onChange={val => onChange({ value: val, name: 'fan_low' })}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Col>
                          <Col lg={12} xl={6}>
                            <div>
                              <div className="clearfix">
                                <h4>Temperature for max fan speed <b>{fan_high}<span className="small">°c</span></b></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>This is the temperature needed to set the fan at maximum speed.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider
                                      min={this.marks.fan_high.min}
                                      max={this.marks.fan_high.max}
                                      step={5}
                                      marks={this.marks.fan_high.data}
                                      value={fan_high}
                                      onChange={val => onChange({ value: val, name: 'fan_high' })}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    }
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

export default SettingsMiner;
