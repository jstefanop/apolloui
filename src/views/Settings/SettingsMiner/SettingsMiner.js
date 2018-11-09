import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import {
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
        min: 384,
        max: 954,
        data: {
          384: 'Min',
          450: '',
          480: '',
          540: '',
          600: '',
          612: '',
          625: '',
          636: '',
          648: '',
          700: '',
          720: '',
          744: '',
          756: '',
          768: '',
          796: '',
          832: '',
          852: '',
          876: '',
          900: '',
          924: '',
          954: 'Max'
        }
      },
      voltage: {
        min: 384,
        max: 954,
        data: {
          384: 'Min',
          450: '',
          480: '',
          540: '',
          600: '',
          612: '',
          625: '',
          636: '',
          648: '',
          700: '',
          720: '',
          744: '',
          756: '',
          768: '',
          796: '',
          832: '',
          852: '',
          876: '',
          900: '',
          924: '',
          954: 'Max'
        }
      },
      fan: {
        min: 0,
        max: 100,
        data: {
          0: 'Min',
          10: '',
          20: '',
          30: '',
          40: '',
          50: '50%',
          60: '',
          70: '',
          80: '',
          90: '',
          100: 'Max'
        }
      }
    };

    this.slider = {

    };

    this.onSelect = this.onSelect.bind(this);
    this.autoFanSwitchChange = this.autoFanSwitchChange.bind(this);
  }

  onSelect(mode) {
    const {
      onChange,
    } = this.props;
    onChange({ name: 'minerMode', value: mode });
  }

  autoFanSwitchChange() {
    const {
      fan,
      onChange,
    } = this.props;
    onChange({ name: 'fan', value: fan === -1 ? 0 : -1 });
  }

  render() {
    const {
      minerMode,
      voltage,
      fan,
      frequency,
      onChange,
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
                                color="primary"
                                checked={minerMode === 'eco'}
                                size=""
                                onChange={() => this.onSelect('eco')}
                                disabled={minerMode === 'eco'}
                              />
                              <h4>
                                <i className="fa fa-leaf mr-2 initialism text-secondary" />
                                <Trans>ECO mode</Trans>
                              </h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>In ECO mode your miner will consume less power (about <b>1.0W/MHs</b>) but its hashrate will be slower. This mode is recommende if you want have less noise and less possible to overheat your miner.</Trans>
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
                                color="success"
                                checked={minerMode === 'turbo'}
                                size=""
                                onChange={() => this.onSelect('turbo')}
                                disabled={minerMode === 'turbo'}
                              />
                              <h4>
                                <i className="fa fa-rocket mr-2 initialism text-secondary" />
                                <Trans>TURBO mode</Trans>
                              </h4>
                            </div>
                            <div>
                              <p className="text-muted ">
                                { 
                                // eslint-disable-next-line 
                                }
                                <Trans>In Turbo mode your miner will consume more power (about <b>1.4W/MHs</b>) and so its hashrate will be faster. This mode is good to gain the maximum profit but you need to take care of possible overheat.</Trans>
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
                                checked={minerMode === 'custom'}
                                size=""
                                onChange={() => this.onSelect('custom')}
                                disabled={minerMode === 'custom'}
                              />
                              <h4>
                                <i className="fa fa-diagnoses mr-2 initialism text-secondary" />
                                <Trans>Custom mode</Trans>
                              </h4>
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

            {
              minerMode === 'custom'
              && (
              <Row>
                <Col xl="12">
                  <Card>
                    <CardHeader>
                      <CardTitle><i className="fa fa-diagnoses mr-2"></i><Trans>Miner custom mode</Trans></CardTitle>
                      <CardSubtitle className="text-muted"><Trans>Personalise your miner configurations</Trans></CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row form>
                          <Col lg={12} xl={4}>
                            <div>
                              <div className="clearfix">
                                <h4><Trans>Voltage</Trans> <b>{voltage}<span className="small">V</span></b></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  { 
                                  // eslint-disable-next-line 
                                  }
                                  <Trans>You can set your miner custom voltage or <a href="">reset</a> to default value.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider
                                      min={this.marks.voltage.min}
                                      max={this.marks.voltage.max}
                                      marks={this.marks.voltage.data}
                                      step={null}
                                      value={voltage}
                                      onChange={val => onChange({ value: val, name: 'voltage' })}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Col>
                          <Col lg={12} xl={4}>
                            <div>
                              <div className="clearfix">
                                <h4><Trans>Frequency</Trans> <b>{frequency}<span className="small">MHz</span></b></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  { 
                                  // eslint-disable-next-line 
                                  }
                                  <Trans>You can set your miner custom frequency or <a href="">reset</a> to default value.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider
                                      min={this.marks.frequency.min}
                                      max={this.marks.frequency.max}
                                      marks={this.marks.frequency.data}
                                      step={null}
                                      value={frequency}
                                      onChange={val => onChange({ value: val, name: 'frequency' })}
                                    />
                                  </CardBody>
                                </Card>
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
                                  color="success"
                                  checked={fan === -1}
                                  onChange={this.autoFanSwitchChange}
                                />
                                <h4><Trans>Auto adjust fan</Trans> { (fan > -1) ? <b>{fan}<span className="small">%</span></b> : null }</h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>Keep fan speed at auto mode or turn of it to manually set the fan speed.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider
                                      min={this.marks.fan.min}
                                      max={this.marks.fan.max}
                                      step={10}
                                      marks={this.marks.fan.data}
                                      disabled={fan === -1}
                                      value={fan !== -1 ? fan : 0}
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
              )
            }
          </div>
        )}
      </I18n>
    );
  }
}

export default SettingsMiner;
