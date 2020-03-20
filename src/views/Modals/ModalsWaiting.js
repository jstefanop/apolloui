import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

import { Loading } from '../Loading';
import { Trans } from '@lingui/macro';

class ModalsWaiting extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} className={this.props.className} size="md">
          <ModalHeader className="bg-warning"><Loading /></ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <Card className="border-0">
                    <CardBody>
                      <h6>Please wait while miner is warming up</h6>
                      <p className="small text-muted">This takes about 30 seconds after that you will be redirect to the dashboard</p>
                      <p className="lead small text-muted">If something goes wrong, start from <Link to="/dashboard">dashboard</Link></p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalsWaiting;
