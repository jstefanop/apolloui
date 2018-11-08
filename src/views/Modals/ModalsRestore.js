import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Input,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { Loading } from '../Loading';
import { Trans } from '@lingui/macro';

import { toggleRestoreModal as toggleRestoreModalAction } from '../../actions/backup';
import { restoreConfiguration as restoreConfigurationAction } from '../../actions/backup';

class ModalsRestore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      backupError: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFileChosen = this.handleFileChosen.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRestore() {
    const {
      content,
      backupError,
    } = this.state;

    const {
      toggleRestoreModal,
      restoreConfiguration,
    } = this.props;

    if (!content) {
      this.setState({
        backupError: 'Backup file is required.',
      });
      return;
    }

    let backup = '';

    try {
      backup = JSON.parse(content);
    } catch (err) {
      this.setState({
        backupError: 'Invalid backup file',
      });
      return;
    }

    if (!backup.settings || !backup.pools) {
      this.setState({
        backupError: 'Invalid backup file',
      });
      return;
    }

    restoreConfiguration(backup);
    toggleRestoreModal(false);
  }

  handleClose() {
    const {
      toggleRestoreModal,
    } = this.props;

    // TODO: Add restore

    toggleRestoreModal(false);
  }

  handleFileChosen(file) {
    const {
      content,
    } = this.state;

    const reader = new FileReader();
    reader.onload = (evt) => {
      this.setState({
        content: evt.target.result,
      });
    };
    reader.readAsText(file);
  }

  render() {
    const {
      show,
      className,
    } = this.props;

    const {
      backupError,
    } = this.state;

    return (
      <div>
        <Modal isOpen={show} className={className} size="md">
          <ModalHeader className="bg-light">Restore backup configuration</ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <Card className="border-0">
                    <CardBody>
                      <FormGroup className="mb-0">
                        <Input
                          type="file"
                          name="backup"
                          id="backup"
                          bsSize="lg"
                          onChange={e => this.handleFileChosen(e.target.files[0])}
                        />
                        <span className="text-danger">
                          {backupError}
                        </span>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleClose}>Close</Button>
            <Button color="primary" onClick={this.handleRestore}>Restore</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.backup.status,
});

const mapDispatchToProps = dispatch => ({
  toggleRestoreModal: (status) => {
    dispatch(toggleRestoreModalAction({ status }));
  },
  restoreConfiguration: (backup) => {
    dispatch(restoreConfigurationAction({ backup }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalsRestore);
