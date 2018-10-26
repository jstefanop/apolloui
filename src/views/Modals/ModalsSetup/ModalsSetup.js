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
  ModalFooter
} from 'reactstrap';

import { Trans } from '@lingui/macro';

class ModalsSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // TODO
  /*
    * Modal setup cannot be closed without clicking Save button
    * Pool config can be skipped
    * Password is required
  */

  render() {

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          <ModalHeader className="bg-light" toggle={this.toggle}>Initial setup</ModalHeader>
          <ModalBody>
            <Trans>Welcome to the wizard setup. Here you can configure basic settings to start your miner to mine for you. You can skip this step and configure your miner later. To add more pools or change any other configuration go to the settings page after closing this modal.</Trans>
            <hr className="mb-4" />
            <div className="animated fadeIn mt-4">
              <Row>
                <Col lg="12">
                  <h5><i className="fa fa-database mr-2"></i><Trans>Setup main pool</Trans></h5>
                  <div className="small text-muted"><Trans>You can create an account on <a href="https://www.litecoinpool.org" rel="noopener noreferrer" target="_blank">Litecoinpool.org</a> and use <code>stratum+tcp://litecoinpool.org:3333</code> as pool url or you can use any other pool compatible with Scrypt algorithm.</Trans></div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={4}>
                          <FormGroup className="mb-0">
                            <Label for="poolUrl"><Trans>Pool Url</Trans></Label>
                            <Input type="text" name="poolUrl" id="poolUrl" placeholder="stratum+tcp://us.litecoinpool.org:3333" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup className="mb-0">
                            <Label for="poolUsername"><Trans>Pool Username</Trans></Label>
                            <Input type="text" name="poolUsername" id="poolUsername" placeholder="futurebit.1" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup className="mb-0">
                            <Label for="poolPassword"><Trans>Pool Password</Trans></Label>
                            <Input type="text" name="poolPassword" id="poolPassword" placeholder="x" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup className="mb-0">
                            <Label for="poolProxy"><Trans>Pool Proxy</Trans></Label>
                            <Input type="text" name="poolProxy" id="poolProxy" placeholder="http://192.168.1.1:3333" bsSize="lg" />
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
                  <h5><i className="fa fa-user mr-2"></i><Trans>Setup lockscreen password</Trans></h5>
                  <div className="small text-muted"><Trans><span class="text-danger">* Required</span> Please set a password for this dashboard, so only user having the password want manage your miner or look at statistics.</Trans></div>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="password"><Trans>Password</Trans></Label>
                            <Input type="password" name="password" id="password" placeholder="" bsSize="lg" />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="mb-0">
                            <Label for="repeatPassword"><Trans>Repeat password</Trans></Label>
                            <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="" bsSize="lg" />
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
            <Button color="primary" onClick={this.toggle}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalsSetup;
