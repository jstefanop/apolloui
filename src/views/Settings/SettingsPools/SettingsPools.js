import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import {
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
  Input
} from 'reactstrap';

import { Trans, t } from '@lingui/macro';
import { I18n } from "@lingui/react"

import SettingsPoolItem from './SettingsPoolItem';

class SettingsPools extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle><Trans>Pools</Trans></CardTitle>
                    <CardSubtitle className="text-muted"><Trans>Manage pools configuration for your miner</Trans></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <SettingsPoolItem></SettingsPoolItem>
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

export default SettingsPools;
