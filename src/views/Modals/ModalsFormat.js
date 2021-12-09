import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Jumbotron,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';

import { Trans } from '@lingui/macro';

import { toggleFormatModal as toggleFormatModalAction } from '../../actions/format';
import { formatDisk as formatDiskAction } from '../../actions/format';

class ModalFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      backupError: ''
    };

    this.handleFormat = this.handleFormat.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleFormat() {
    const {
      toggleFormatModal,
      formatDisk,
    } = this.props;

    formatDisk();
  }

  handleClose() {
    const {
      toggleFormatModal,
    } = this.props;

    toggleFormatModal(false);
  }


  render() {
    const {
      show,
      className,
      loading,
      done,
    } = this.props;

    return (
      <div>
        <Modal isOpen={show} className={className} size="md">
          <ModalHeader className="bg-warning" toggle={this.props.toggle}>Format Node NVMe SSD</ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <Jumbotron>
                    {!loading && !done && <div><Trans>This action completely erases attached NVMe SSD, and sets its up as a new Bitcoin Node drive. Only use to setup new drives, or if your current node drive is corrupted and won’t start up.</Trans> <strong><Trans>ALL DATA ON DRIVE WILL BE LOST</Trans></strong></div>}
                    {loading && <div><strong><Trans>Please wait while the disk is being formatted</Trans></strong>, <Trans>this could require a couple of minutes</Trans></div>}
                    {done && <div><Trans>Disk was formatted, please manually start the node</Trans></div>}
                  </Jumbotron>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button disabled={loading} onClick={this.handleClose}>Close</Button>
            {!done && <Button disabled={loading} color="danger" onClick={this.handleFormat}>Proceed</Button>}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.format.status,
    loading: state.format.loading,
    done: state.format.done
  }
};

const mapDispatchToProps = dispatch => ({
  toggleFormatModal: (status) => {
    dispatch(toggleFormatModalAction({ status }));
  },
  formatDisk: () => {
    dispatch(formatDiskAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormat);
