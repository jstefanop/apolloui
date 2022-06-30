import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import { Trans } from '@lingui/macro';

class SettingsMiner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeEnableTor: props.nodeEnableTor
    };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch(mode) {
    const {
      onChange,
    } = this.props;
    this.setState({
      [mode.name]: mode.value,
    });
    onChange({ name: mode.name, value: mode.value });
  }

  render() {
    const {
      nodeRpcPassword,
      nodeEnableTor
    } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          { /* Miner */ }
          <Col xl="12">
            <Card>
              <CardHeader>
                <CardTitle><i className="fa fa-network-wired mr-2"></i><Trans>Node</Trans></CardTitle>
                <CardSubtitle className="text-muted"><Trans>Manage Bitcoin node configuration</Trans></CardSubtitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form>
                    <Col lg={12} xl={4}>
                      <div>
                        <div className="clearfix">
                          <AppSwitch
                            className="float-left mr-2"
                            variant="pill"
                            label
                            color="success"
                            checked={nodeEnableTor}
                            size=""
                            onChange={() => this.onSwitch({ value: !this.state.nodeEnableTor, name: 'nodeEnableTor' })}
                          />
                          <h4>
                            <i className="fa fa-lock mr-2 initialism text-secondary" />
                            <Trans>Enable TOR</Trans>
                          </h4>
                        </div>
                        <div>
                          <p className="text-muted ">
                            { 
                            // eslint-disable-next-line 
                            }
                            <Trans>Connect Bitcoin only over the Tor network to increase security and anonymity. Note: the Bitcoin node will be restarted to apply the new configuration.</Trans>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12} xl={4}>
                      <div>
                        <div>
                          <div className="clearfix">
                            <h4><i className="fa fa-key mr-2 initialism text-secondary"></i><Trans>Bitcoin RPC password</Trans></h4>
                          </div>
                          <p className="text-muted ">
                            { 
                            // eslint-disable-next-line 
                            }
                            This is your personal Bitcoin node password: <strong>{nodeRpcPassword}</strong>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SettingsMiner;
