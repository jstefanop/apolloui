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
      nodeEnableTor,
      nodeUserConf,
      nodeConf
    } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          { /* Miner */ }
          <Col xl="12">
            <Card>
              <CardHeader>
                <CardTitle><i className="fa fa-network-wired mr-2"></i><Trans>Node</Trans></CardTitle>
                <CardSubtitle className="text-muted"><Trans>Manage Bitcoin Node Configuration</Trans></CardSubtitle>
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
                            <Trans>Connect your Bitcoin Node over the Tor network to increase security and anonymity. Note: you need to press the Save button on the top of the page after changing settings in this section, and your node will be restarted to apply.</Trans>
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
                            <Trans>This is your personal Bitcoin Node RPC password (username is futurebit, use these two values to connect external wallets/services directly to your BTC node)</Trans>: <strong>{nodeRpcPassword}</strong>
                          </p>
                        </div>
                      </div>
                    </Col>
                    {(nodeConf.data && nodeConf.data.bitcoinConf) &&
                      <Col lg={12} xl={12}>
                        <div>
                          <div>
                            <div className="clearfix">
                              <h4><i className="fa fa-cog mr-2 initialism text-secondary"></i><Trans>Node configuration</Trans></h4>
                            </div>
                            <p className="text-muted ">
                              { 
                              // eslint-disable-next-line 
                              }
                              <Trans>Add additional configuration lines to the bitcoin.conf file.</Trans> <small>(<Trans>Note: this section is for advanced users, and no validation is performed. You can add things like ipallow to allow external devices that host wallets etc to connect directly to your node for broadcasting transactions etc. </Trans>)</small>
                            </p>
                            <div className="mt-3">
                              <textarea 
                                rows="10"
                                className="form-control"
                                defaultValue={nodeUserConf}
                                onChange={(e) => this.onSwitch({ value: e.target.value, name: 'nodeUserConf' })}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </Col>
                    }
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
