import React, { Component } from 'react';

import {
  Button,
  Card,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import { Trans } from '@lingui/macro';

import SettingsPools from './SettingsPools';
import SettingsMiner from './SettingsMiner';
import SettingsWifi from './SettingsWifi';
import SettingsGeneral from './SettingsGeneral';

class Settings extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader className="bg-dark">
                <Button size="sm" className="btn-success text-uppercase mr-2"><Trans>Save</Trans></Button>
                <Button size="sm" className="btn-warning text-uppercase"><Trans>Save & Restart</Trans></Button>
                <span className="ml-2"><Trans>You need to restart your miner to apply changes.</Trans></span>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        { /* Pools */ }
        <SettingsPools></SettingsPools>

        { /* Miner conf */ }
        <SettingsMiner></SettingsMiner>

        { /* Wifi */ }
        <SettingsWifi></SettingsWifi>

        { /* General options */ }
        <SettingsGeneral></SettingsGeneral>
        
        <p></p>
      </div>
    );
  }
}

export default Settings;
