import { connect } from 'react-redux';
import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
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
  ListGroupItem,
} from 'reactstrap';
import ModalsRestore from '../../Modals/ModalsRestore';

import { Trans } from '@lingui/macro';

import { changePassword as changePasswordAction } from '../../../actions/auth';
import { backupConfiguration as backupConfigurationAction } from '../../../actions/backup';
import { toggleRestoreModal as toggleRestoreModalAction } from '../../../actions/backup';

class SettingsGeneral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      repeatPassword: '',
      passwordError: '',
      repeatPasswordError: '',
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleBackupConfiguration = this.handleBackupConfiguration.bind(this);
    this.handletoggleRestoreModal = this.handletoggleRestoreModal.bind(this);
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handlePasswordChange() {
    const {
      password,
      repeatPassword,
    } = this.state;

    const {
      changePassword,
    } = this.props;

    if (!password) {
      this.setState({
        passwordError: 'Password is required.',
      });
      return;
    }

    if (password !== repeatPassword) {
      this.setState({
        passwordError: 'Passwords do not match.',
        repeatPasswordError: 'Passwords do not match.',
      });
      return;
    }

    changePassword(password);
  }

  handleBackupConfiguration() {
    const {
      backupConfiguration,
    } = this.props;

    backupConfiguration();
  }

  handletoggleRestoreModal() {
    const {
      toggleRestoreModal,
    } = this.props;

    toggleRestoreModal(true);
  }

  render() {
    const {
      leftSidebarVisibility,
      leftSidebarExtended,
      rightSidebarVisibility,
      temperatureUnit,
      onChange,
    } = this.props;

    const {
      password,
      repeatPassword,
      passwordError,
      repeatPasswordError,
    } = this.state;

    return (
      <div className="animated fadeIn">
        <CardDeck>
          { /* Lockscreen */ }
          <Card>
            <CardHeader>
              <CardTitle><i className="fa fa-key mr-2"></i><Trans>Change lockscreen password</Trans></CardTitle>
              <CardSubtitle className="text-muted"><Trans>Change the password to access the dashboard</Trans></CardSubtitle>
            </CardHeader>
            <CardBody>
              <p className="help-block form-text text-muted">
                <Trans>Changing the password will lock the dashboard. You will need to use the new password to unlock it.</Trans>
              </p>
              <Form>
                <Row form>
                  <Col lg={12} xl={6}>
                    <FormGroup>
                      <Label for="password"><Trans>Password</Trans></Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        bsSize="lg"
                        value={password}
                        onChange={this.onChange}
                      />
                      <span className="text-danger">
                        {passwordError}
                      </span>
                    </FormGroup>
                  </Col>
                  <Col lg={12} xl={6}>
                    <FormGroup>
                      <Label for="repeatPassword"><Trans>Repeat password</Trans></Label>
                      <Input
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        placeholder=""
                        bsSize="lg"
                        value={repeatPassword}
                        onChange={this.onChange}
                      />
                      <span className="text-danger">
                        {repeatPasswordError}
                      </span>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <Button className="mr-2 text-uppercase" color="primary" size="sm" onClick={this.handlePasswordChange}><Trans>Change</Trans></Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>

          { /* Layout */ }
          <Card>
            <CardHeader>
              <CardTitle><i className="fa fa-sliders-h mr-2"></i><Trans>Layout options</Trans></CardTitle>
              <CardSubtitle className="text-muted"><Trans>Manage dashboard specific configurations</Trans></CardSubtitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col xl={12}>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch
                            className="float-left mr-2"
                            variant="pill"
                            label
                            color="success"
                            checked={leftSidebarVisibility}
                            size=""
                            onChange={() => onChange({ name: 'leftSidebarVisibility', value: !leftSidebarVisibility })}
                          />
                          <div><Trans>Left Sidebar visibility</Trans></div>
                        </div>
                        <div className="mt-1 small text-muted"><Trans>Set left sidebar default visibility</Trans></div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch
                            className="float-left mr-2"
                            variant="pill"
                            label
                            color="success"
                            checked={leftSidebarExtended}
                            size=""
                            onChange={() => onChange({ name: 'leftSidebarExtended', value: !leftSidebarExtended })}
                          />
                          <div><Trans>Extended sidebar</Trans></div>
                        </div>
                        <div className="mt-1 small text-muted"><Trans>Keep left sidebar extended or only icons</Trans></div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch
                            className="float-left mr-2"
                            variant="pill"
                            dataOn="°C"
                            dataOff="°F"
                            label
                            color="success"
                            checked={temperatureUnit === 'c'}
                            size=""
                            onChange={() => onChange({ name: 'temperatureUnit', value: temperatureUnit === 'f' ? 'c' : 'f' })}
                          />
                          <div><Trans>Temperature unit</Trans></div>
                        </div>
                        <div className="mt-1 small text-muted"><Trans>Set it to Celsius or Fahrenheit</Trans></div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="clearfix">
                          <AppSwitch
                            className="float-left mr-2"
                            variant="pill"
                            label
                            color="success"
                            checked={rightSidebarVisibility}
                            size=""
                            onChange={() => onChange({ name: 'rightSidebarVisibility', value: !rightSidebarVisibility })}
                          />
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
              <CardTitle><i className="fa fa-save mr-2"></i><Trans>Backup &amp; Reset</Trans></CardTitle>
              <CardSubtitle className="text-muted"><Trans>Use this tools to backup, restore and reset configurations</Trans></CardSubtitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={12}>
                    <ListGroup flush>
                      <ListGroupItem>
                        <div className="">
                          <Button className="mr-2 text-uppercase" color="primary" size="sm" onClick={this.handleBackupConfiguration}><Trans>Backup</Trans></Button>
                          <div className="mt-1 small text-muted"><Trans>Create a backup file of dashboard, miner and pools configurations</Trans></div>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className="">
                          <Button className="mr-2 text-uppercase" color="primary" size="sm" onClick={this.handletoggleRestoreModal}><Trans>Restore</Trans></Button>
                          <div className="mt-1 small text-muted"><Trans>Restore all configurations from a backup file</Trans></div>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </CardDeck>

        <ModalsRestore />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changePassword: (password) => {
    dispatch(changePasswordAction({ password }));
  },
  backupConfiguration: () => {
    dispatch(backupConfigurationAction());
  },
  toggleRestoreModal: (status) => {
    dispatch(toggleRestoreModalAction({ status }));
  },
});

export default connect(null, mapDispatchToProps)(SettingsGeneral);
