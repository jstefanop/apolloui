import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Button,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { Trans } from '@lingui/macro';

import { Loading } from '../Loading';
import { saveInitialSetup } from '../../actions/auth';

class ModalsSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolUrl: '',
      poolUsername: '',
      poolPassword: '',
      poolProxy: '',
      poolFieldErrors: {},
      password: '',
      repeatPassword: '',
      passwordError: '',
      repeatPasswordError: '',
      saving: false
    };

    this.handleSave = this.handleSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSave() {
    const {
      password,
      repeatPassword,
      poolUrl,
      poolUsername,
      poolPassword,
      poolProxy,
    } = this.state;

    const {
      saveSetup,
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

    let poolSetup;
    if (poolUrl || poolUsername || poolPassword || poolProxy) {
      const errors = {};

      if (!poolUrl) {
        errors.poolUrl = 'Pool URL is required.';
      } else {
        try {
          new URL(poolUrl); // eslint-disable-line no-new
        } catch (err) {
          errors.poolUrl = 'Pool URL has to be valid URL.';
        }
      }

      if (poolProxy) {
        try {
          new URL(poolProxy); // eslint-disable-line no-new
        } catch (err) {
          errors.poolProxy = 'Pool proxy has to be valid URL.';
        }
      }

      if (!poolUsername) {
        errors.poolUsername = 'Pool username is required.';
      }

      if (!poolPassword) {
        errors.poolPassword = 'Pool password is required.';
      }

      if (Object.keys(errors).length !== 0) {
        this.setState({
          poolFieldErrors: errors,
        });
        return;
      }

      poolSetup = {
        url: poolUrl,
        username: poolUsername,
        password: poolPassword,
        proxy: poolProxy
      };
    }

    this.setState({ saving: true });
    saveSetup({ password, poolSetup });
  }

  render() {
    const {
      password,
      repeatPassword,
      passwordError,
      repeatPasswordError,
      poolUrl,
      poolUsername,
      poolPassword,
      poolProxy,
      poolFieldErrors,
      saving
    } = this.state;

    const {
      show,
      className,
    } = this.props;

    return (
      <div>
        <Modal isOpen={show} className={className} size="lg">
          <ModalHeader className="bg-light">Initial setup</ModalHeader>
          <ModalBody>
            <Trans>Welcome to the wizard setup. Here you can configure basic settings to start your miner to mine for you. You can skip this step and configure your miner later. To add more pools or change any other configuration go to the settings page after closing this modal.</Trans>
            <hr className="mb-4" />
            <div className="animated fadeIn mt-4">
              <Row>
                <Col lg="12">
                  <h5>
                    <i className="fa fa-database mr-2" />
                    <Trans>Setup main pool</Trans>
                  </h5>
                  <div className="small text-muted">
                    <Trans>
                      You can create an account on <a href="https://www.slushpool.com" rel="noopener noreferrer" target="_blank">Slushpool.com</a> and use <code>stratum+tcp://stratum.slushpool.com:3333</code> as pool url or you can use any other pool compatible with Scrypt algorithm.
                      Visit <a href="https://www.slushpool.com/help" rel="noopener noreferrer" target="_blank">Slushpool.com/help</a> for additional information on how pool mining works and detailed FAQ on setting up your account.
                    </Trans>
                  </div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="poolUrl"><Trans>Url</Trans></Label>
                            <Input type="text" name="poolUrl" id="poolUrl" placeholder="stratum+tcp://stratum.slushpool.com:3333" bsSize="lg" value={poolUrl} onChange={this.onChange} />
                            <span className="text-danger">
                              {poolFieldErrors.poolUrl}
                            </span>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup className="mb-0">
                            <Label for="poolUsername"><Trans>Username</Trans></Label>
                            <Input type="text" name="poolUsername" id="poolUsername" placeholder="futurebit.1" bsSize="lg" value={poolUsername} onChange={this.onChange} />
                            <span className="text-danger">
                              {poolFieldErrors.poolUsername}
                            </span>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup className="mb-0">
                            <Label for="poolPassword"><Trans>Password</Trans></Label>
                            <Input type="text" name="poolPassword" id="poolPassword" placeholder="x" bsSize="lg" value={poolPassword} onChange={this.onChange} />
                            <span className="text-danger">
                              {poolFieldErrors.poolPassword}
                            </span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Col>
              </Row>
            </div>
            <hr className="mb-4" />
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <h5>
                    <i className="fa fa-user mr-2" />
                    <Trans>Setup lockscreen password</Trans>
                  </h5>
                  <div className="small text-muted">
                    <Trans>
                      <span className="text-danger">* Required</span> Please set a password for this dashboard, so only user having the password want manage your miner or look at statistics.
                    </Trans>
                  </div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="password"><Trans>Password</Trans></Label>
                            <Input type="password" name="password" id="password" placeholder="" bsSize="lg" value={password} onChange={this.onChange} />
                            <span className="text-danger small">
                              {passwordError}
                            </span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="repeatPassword"><Trans>Repeat password</Trans></Label>
                            <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="" bsSize="lg" value={repeatPassword} onChange={this.onChange} />
                            <span className="text-danger small">
                              {repeatPasswordError}
                            </span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            {saving
              ? <Loading />
              : <Button color="primary" onClick={this.handleSave}>Save</Button>
            }
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.auth.status === 'pending'
});

const mapDispatchToProps = dispatch => ({
  saveSetup: ({ password, poolSetup }) => {
    dispatch(saveInitialSetup({ password, poolSetup }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsSetup);
