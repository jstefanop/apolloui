import { connect } from 'react-redux'
import React, { Component } from 'react';

import {
  Button,
  Card,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import { Trans } from '@lingui/macro';

import SettingsMiner from './SettingsMiner/SettingsMiner';
import SettingsWifi from './SettingsWifi/SettingsWifi';
import SettingsGeneral from './SettingsGeneral/SettingsGeneral';

class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oldSettings: this.props.settings,
      settings: { ...this.props.settings }
    }
  }

  render() {
    const {
      minerMode,
      voltage,
      frequency,
      fan
    } = this.state.settings

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

        { /* Miner conf */ }
        <SettingsMiner { ...{ minerMode, voltage, frequency, fan } } />

        { /* Wifi */ }

        <SettingsWifi></SettingsWifi>

        { /* General options */ }
        <SettingsGeneral></SettingsGeneral>
        
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(Settings);
