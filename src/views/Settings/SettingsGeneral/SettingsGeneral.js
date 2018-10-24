import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Button,
  CardDeck,
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
  ListGroupItem
} from 'reactstrap';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class SettingsGeneral extends Component {

  render() {

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
                <CardDeck>
                  { /* Lockscreen */ }
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

                  { /* Layout */ }
                  <Card>
                    <CardHeader>
                      <CardTitle><Trans>Layout options</Trans></CardTitle>
                      <CardSubtitle className="text-muted"><Trans>Manage dashboard specific configurations</Trans></CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row >
                          <Col md={12} lg={6}>
                            <ListGroup flush>
                              <ListGroupItem>
                                <div className="clearfix">
                                  <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={''}/>
                                  <div><Trans>Left Sidebar visibility</Trans></div>
                                </div>
                                <div className="mt-1 small text-muted"><Trans>Set left sidebar default visibility</Trans></div>
                              </ListGroupItem>
                              <ListGroupItem>
                                <div className="clearfix">
                                  <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} defaultChecked size={''}/>
                                  <div><Trans>Extended sidebar</Trans></div>
                                </div>
                                <div className="mt-1 small text-muted"><Trans>Keep left sidebar extended or only icons</Trans></div>
                              </ListGroupItem>
                              <ListGroupItem>
                                <div className="clearfix">
                                  <AppSwitch className="float-left mr-2" variant={'pill'} dataOn="°C" dataOff="°F" label color={'success'} defaultChecked size={''}/>
                                  <div><Trans>Temperature unit</Trans></div>
                                </div>
                                <div className="mt-1 small text-muted"><Trans>Set it to Celsius or Fahrenheit</Trans></div>
                              </ListGroupItem>
                            </ListGroup>
                          </Col>
                          <Col md={12} lg={6}>
                            <ListGroup flush>
                              <ListGroupItem>
                                <div className="clearfix">
                                  <AppSwitch className="float-left mr-2" variant={'pill'} label color={'success'} size={''}/>
                                  <div><Trans>Right sidebar visibility</Trans></div>
                                </div>
                                <div className="mt-1 small text-muted"><Trans>Set right sidebar default visibility</Trans></div>
                              </ListGroupItem>
                            </ListGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>

                  { /* Backup/Reset */ }
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

          </div>
        )}
      </I18n>
    );
  }
}

export default SettingsGeneral;
