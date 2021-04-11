import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
  Button,
  Card,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';

import { Trans } from '@lingui/macro';

import SettingsMiner from './SettingsMiner/SettingsMiner';
import SettingsWifi from './SettingsWifi/SettingsWifi';
import SettingsGeneral from './SettingsGeneral/SettingsGeneral';
import { saveSettings, saveSettingsAndRestartMiner } from '../../actions/settings';

const restartFields = [
  'minerMode',
  'frequency',
  'apiAllow'
];

class Settings extends Component {
  constructor(props) {
    super(props);

    const {
      settings,
    } = this.props;

    this.state = {
      settings: { ...settings },
    };

    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSaveAndRestart = this.handleSaveAndRestart.bind(this);
  }

  onChange({ name, value }) {
    this.setState(state => ({
      settings: {
        ...state.settings,
        [name]: value,
      },
    }));
  }

  handleSave() {
    const { save } = this.props;
    const { settings } = this.state;

    save(settings);
  }

  handleSaveAndRestart() {
    const { saveAndRestart } = this.props;
    const { settings } = this.state;

    saveAndRestart(settings);
  }

  render() {
    const {
      settings: {
        minerMode,
        voltage,
        frequency,
        fan_low,
        fan_high,
        customApproval,
        apiAllow,
        leftSidebarVisibility,
        leftSidebarExtended,
        rightSidebarVisibility,
        temperatureUnit,
      },
      settings,
    } = this.state;

    const { oldSettings } = this.props;

    const changed = !isEqual(settings, oldSettings);
    const restartNeeded = !isEqual(pick(settings, restartFields), pick(oldSettings, restartFields));
    return (
      <div className="animated fadeIn">
        { changed && (
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader className="bg-dark">
                { !restartNeeded && (
                  <Button
                    size="sm"
                    className="btn-success text-uppercase mr-2"
                    disabled={!changed}
                    onClick={this.handleSave}
                  >
                    <Trans>Save</Trans>
                  </Button>
                )}
                { restartNeeded && (
                  <Button
                    size="sm"
                    className="btn-warning text-uppercase"
                    onClick={this.handleSaveAndRestart}
                  >
                    <Trans>Save &amp; Restart</Trans>
                  </Button>
                )}
                { restartNeeded && <span className="ml-2"><Trans>You need to restart your miner to apply changes.</Trans></span> }
                { !restartNeeded && changed && <span className="ml-2"><Trans>You need to save your settings to apply changes (miner won't be restarted).</Trans></span> }
              </CardHeader>
            </Card>
          </Col>
        </Row>
        )}

        { /* Miner conf */ }
        <SettingsMiner
          {...{
            minerMode, voltage, frequency, fan_low, fan_high, customApproval, apiAllow
          }}
          onChange={this.onChange}
        />

        { /* Wifi */ }

        <SettingsWifi />

        { /* General options */ }
        <SettingsGeneral
          {...{
            leftSidebarVisibility, leftSidebarExtended, rightSidebarVisibility, temperatureUnit,
          }}
          onChange={this.onChange}
        />

        <p />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  oldSettings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  save: (settings) => {
    dispatch(saveSettings(settings));
  },
  saveAndRestart: (settings) => {
    dispatch(saveSettingsAndRestartMiner(settings));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
