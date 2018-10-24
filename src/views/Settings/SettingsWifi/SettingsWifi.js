import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form
} from 'reactstrap';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class SettingsWifi extends Component {

  render() {

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
          </div>
        )}
      </I18n>
    );
  }
}

export default SettingsWifi;
