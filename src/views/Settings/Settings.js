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
import { saveSettings } from '../../actions/settings';

const restartFields = [
  'minerMode',
  'voltage',
  'frequency',
  'fan',
];

class Settings extends Component {
  constructor(props) {
    super(props);

    const {
      settings,
    } = this.props;

    this.state = {
      settings,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  render() {
    const {
      settings: {
        minerMode,
        voltage,
        frequency,
        fan,
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
                    onClick={this.handleSave}
                  >
                    <Trans>Save &amp; Restart</Trans>
                  </Button>
                )}
                { restartNeeded && <span className="ml-2"><Trans>You need to restart your miner to apply changes.</Trans></span> }
              </CardHeader>
            </Card>
          </Col>
        </Row>

        { /* Miner conf */ }
        <SettingsMiner
          {...{
            minerMode, voltage, frequency, fan,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
