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

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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

    const errors = {};

    if (!url) {
      errors.url = 'Required';
    } else {
      try {
        new URL(url); // eslint-disable-line no-new
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
    }

    if (!password) {
      errors.password = 'Required';
    }

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
            <span className="text-danger">
              {errors.url}
            </span>
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
            <span className="text-danger">
              {errors.username}
            </span>
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
            <span className="text-danger">
              {errors.password}
            </span>
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
