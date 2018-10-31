import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form
} from 'reactstrap';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class SettingsMiner extends Component {
  constructor(props) {
    super(props)
    this.voltages = {
      '-10': '-10°C',
      0: <strong>0°C</strong>,
      26: '26°C',
      37: '37°C',
      50: '50°C',
      100: {
        style: {
          color: 'red',
        },
        label: <strong>100°C</strong>,
      },
    };
  }

  log(value) {
    console.log(value);
  }

  render() {
    const {
      minerMode
    } = this.props

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              { /* Miner */ }
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
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'primary'} checked={minerMode === 'eco'} size={''}/>
                              <h4><i className="fa fa-leaf mr-2 initialism text-secondary"></i><Trans>ECO mode</Trans></h4>
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
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} checked={minerMode === 'turbo'} size={''}/>
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
                              <AppSwitch className="float-left mr-2" variant={'pill'} label color={'warning'} checked={minerMode === 'custom'} size={''}/>
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

            { 
              minerMode === 'custom' && 
              <Row>
                <Col lg="12">
                  <Card>
                    <CardHeader>
                      <CardTitle><Trans>Custom mode</Trans></CardTitle>
                      <CardSubtitle className="text-muted"><Trans>Personalise your miner configurations</Trans></CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row form>
                          <Col md={4}>
                            <div>
                              <div className="clearfix">
                                <h4><Trans>Voltage</Trans></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>You can set your miner custom voltage or <a href="">reset</a> to default value.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider min={-10} marks={this.voltages} step={null} onChange={this.log} defaultValue={20} />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <div className="clearfix">
                                <h4><Trans>Frequency</Trans></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>You can set your miner custom frequency or <a href="">reset</a> to default value.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider min={-10} marks={this.voltages} step={null} onChange={this.log} defaultValue={20} />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div>
                              <div className="clearfix">
                                <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} checked={true} />
                                <h4><Trans>Auto adjust fan</Trans></h4>
                              </div>
                              <div>
                                <p className="text-muted ">
                                  <Trans>Keep fan speed at auto mode or turn of it to manually set the fan speed.</Trans>
                                </p>
                                <Card className="border-0">
                                  <CardBody>
                                    <Slider min={-10} marks={this.voltages} step={null} disabled={true} onChange={this.log} defaultValue={20} />
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
            }
          </div>
        )}
      </I18n>
    );
  }
}

export default SettingsMiner;
