import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { Trans, t } from '@lingui/macro';
import { I18n } from "@lingui/react"

class SettingsPoolItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <I18n>
        {({ i18n }) => (
          <Row form>
            <Col md={1}>
              <FormGroup>
                <div className="text-right" style={{ marginTop: '36px' }}><AppSwitch className="" variant={'pill'} label color={'success'} defaultChecked size={'lg'}/></div>
              </FormGroup>
            </Col>
            <Col md={3}>
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
        )}
      </I18n>
    );
  }
}

export default SettingsPoolItem;
