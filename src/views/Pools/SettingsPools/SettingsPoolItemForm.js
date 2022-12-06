import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { Trans, t } from '@lingui/macro';

const cleanState = {
  enabled: true,
  donation: 0,
  username: '',
  password: '',
  url: '',
  proxy: '',
  errors: {},
};

class SettingsPoolItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...cleanState,
    };

    this.toggleEnabled = this.toggleEnabled.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  validate() {
    const errors = {};
    const {
      enabled,
      donation,
      url,
      username,
      password,
      proxy,
    } = this.state;

    if (!url) {
      errors.url = 'Required';
    } else {
      try {
        const fakeUrl = url.replace('stratum+tcp', 'http');
        const parsedUrl = new URL(fakeUrl); // eslint-disable-line no-new
        if (!parsedUrl.port) errors.url = 'Url hasn\'t any port are you sure is it right? (it should be something like stratum+tcp://stratum.slushpool.com:3333)';
      } catch (err) {
        errors.url = 'URL has to be valid URL.';
      }
    }

    if (proxy) {
      try {
        new URL(proxy); // eslint-disable-line no-new
      } catch (err) {
        errors.proxy = 'Proxy has to be valid URL.';
      }
    }

    if (!username) {
      errors.username = 'Required';
    } else {
      if (username.match(/[!@"\'#$%^&*(),?:{}|<>\[\]]/g)) errors.username = 'Characters not allowed (only - , _ and .)';
    }

    if (!password) {
      errors.password = 'Required';
    }

    return errors;
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    const errors = this.validate();

    if (Object.keys(errors).length !== 0) {
      this.setState({
        errors,
      });
      return;
    }
  }

  toggleEnabled() {
    const { enabled } = this.state;
    this.setState({
      enabled: !enabled,
    });
  }

  handleAdd() {
    const {
      enabled,
      donation,
      url,
      username,
      password,
      proxy,
    } = this.state;

    const {
      onAdd,
    } = this.props;

    const errors = this.validate();

    if (Object.keys(errors).length !== 0) {
      this.setState({
        errors,
      });
      return;
    }

    onAdd({
      enabled, donation, url, username, password, proxy,
    });

    this.setState({
      ...cleanState,
    });
  }

  render() {
    const {
      enabled,
      username,
      password,
      url,
      proxy,
      errors,
    } = this.state;

    return (
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="poolUrl"><Trans>Url</Trans></Label>
            <Input
              type="text"
              name="url"
              id="poolUrl"
              placeholder={`stratum+tcp://stratum.slushpool.com:3333`}
              bsSize="lg"
              value={url}
              onChange={this.onChange}
            />
            <div className="mt-2 text-danger">
              {errors.url}
            </div>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="poolUsername"><Trans>Username</Trans></Label>
            <Input
              type="text"
              name="username"
              id="poolUsername"
              placeholder="futurebit.1"
              bsSize="lg"
              value={username}
              onChange={this.onChange}
            />
            <div className="mt-2 text-danger">
              {errors.username}
            </div>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="poolPassword"><Trans>Password</Trans></Label>
            <Input
              type="text"
              name="password"
              id="poolPassword"
              placeholder="x"
              bsSize="lg"
              value={password}
              onChange={this.onChange}
            />
            <div className="mt-2 text-danger">
              {errors.password}
            </div>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Button size="lg" className="btn-light" style={{ marginTop: '29px' }} onClick={this.handleAdd}><i className="fa fa-check" /></Button>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default SettingsPoolItemForm;
