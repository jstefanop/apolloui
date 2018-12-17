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
} from 'reactstrap';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

class SettingsMiner extends Component {
  constructor(props) {
    super(props);

    this.marks = {
      frequency: {
        min: 299,
        max: 858,
        step: 13,
        data: {
          299: 'Min',
          439: '439MHz',
          579: '579MHz',
          719: '719MHz',
          858: 'Max'
        }
      },
      voltage: {
        min: 644,
        max: 911,
        step: 4.15,
        data: {
          644: 'Min',
          710.75: '710.75mV',
          777.5: '777.5mV',
          845.25: '845.25mV',
          911: 'Max'
        }
      },
      fan: {
        min: 0,
        max: 100,
        data: {
          0: 'Min',
          25: '25%',
          50: '50%',
          75: '75%',
          100: 'Max'
        }
      }
    };

    this.state = {
      autoFan: props.fan === 0 ? true : false
    };

    this.onSelect = this.onSelect.bind(this);
    this.autoFanSwitchChange = this.autoFanSwitchChange.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onReset(option) {
    const {
      onChange,
    } = this.props;
    if (option === 'frequency') onChange({ name: 'frequency', value: 598});
    if (option === 'voltage') onChange({ name: 'voltage', value: 747});
  }

  onSelect(mode) {
    const {
      onChange,
    } = this.props;
    onChange({ name: 'minerMode', value: mode });
  }

  autoFanSwitchChange() {
    const {
      onChange,
    } = this.props;

    this.setState({
      autoFan: !this.state.autoFan
    });

    onChange({ name: 'fan', value: (this.state.autoFan) ? 50 : 0 });
  }

  render() {
    const {
      minerMode,
      voltage,
      fan,
      frequency,
      onChange
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
                                onChange={() => this.onSelect('eco')}
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
                                onChange={() => this.onSelect('balanced')}
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
                                onChange={() => this.onSelect('turbo')}
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
                      onChange={() => this.onSelect('custom')}
                      disabled={minerMode === 'custom'}
                    />
                    <CardTitle><i className="fa fa-diagnoses mr-2"></i><Trans>Miner custom mode</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>DANGER zone!</Trans></CardSubtitle>
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
                              <h4><Trans>Voltage</Trans> <b>{voltage}<span className="small">mV</span></b></h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>You can set your miner custom voltage or <Button color="link" onClick={() => this.onReset('voltage')}>reset</Button> to default value.</Trans>
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
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} xl={6}>
                          <div>
                            <div className="clearfix">
                              <h4><Trans>Frequency</Trans> <b>{frequency}<span className="small">MHz</span></b></h4>
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
                    <CardTitle><i className="fa fa-wind mr-2"></i><Trans>Miner fan speed</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Adjust the fan speed or set it automatic</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col lg={12} xl={6}>
                          <div>
                            <div className="clearfix">
                              <h4>Fan { (fan) ? <span>at <b>{fan}<span className="small">%</span></b></span> : <Badge size="sm" color="success">Auto</Badge> }</h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                <Trans>Put the slider to the minimum to set automatic fan speed, or choose yours.</Trans>
                              </p>
                              <Card className="border-0">
                                <CardBody>
                                  <Slider
                                    min={this.marks.fan.min}
                                    max={this.marks.fan.max}
                                    step={5}
                                    marks={this.marks.fan.data}
                                    value={fan}
                                    onChange={val => onChange({ value: val, name: 'fan' })}
                                  />
                                </CardBody>
                              </Card>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Form>
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
