import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Jumbotron,
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
  ModalBody
} from 'reactstrap';

import { Trans } from '@lingui/macro';

class ModalsRawStats extends Component {
  

  render() {
    const { miner } = this.props

    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size="lg">
          <ModalHeader className="bg-light" toggle={this.props.toggle}>Miner raw stats</ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <Jumbotron>
                    <pre>{JSON.stringify(miner.stats, null, 2) }</pre>
                  </Jumbotron>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  miner: state.minerStats.data
})

export default connect(mapStateToProps)(ModalsRawStats);
