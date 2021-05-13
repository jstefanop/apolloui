import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Jumbotron,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap';

import { LoadingErrorBox } from '../Loading';
import { updateMcu, updateProgressMcu } from '../../actions/mcu'

import { Trans } from '@lingui/macro';

class ModalsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      title: 'Updating Apollo web. Please wait...',
      showProgress: true,
      icon: 'fa-cog fa-spin',
      show: false
    }
  }

  componentWillUnmount () {
    if (this.intervalHandler) {
        clearTimeout(this.intervalHandler);
        this.intervalHandler = null;
    } 
  }

  doUpdate = () => {
    this.props.updateMcu();

    this.intervalHandler = setInterval(() => {
      const updateProgress = (this.props.mcuManage && this.props.mcuManage.value) ? this.props.mcuManage.value : 0;
      this.props.updateProgressMcu()
      this.setState({
        progressValue: updateProgress
      });
      if (this.state.progressValue >= 80) this.setState({ title: 'Hold on, page will reload in few seconds...'});
    }, 1000);

    this.setState({
      show: true
    });
  }

  render() {
    if (this.state.progressValue >= 100) window.location.reload();

    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size="lg">
          <ModalHeader className="bg-light" toggle={this.props.toggle}>Update Apollo Web</ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <LoadingErrorBox 
                    show={this.state.show}
                    bg="bg-0"
                    title={ this.state.title }
                    centerTitle={true}
                    subtitle={ this.state.subtitle }
                    centerSubtitle={true}
                    icon={ this.state.icon }
                    showBtn={false}
                    showProgress={ this.state.showProgress }
                    progress={ this.state.progressValue }
                  />
                  {!this.state.show &&
                    <Jumbotron>
                      <Trans>
                      We have found a new version of Apollo Web dashboard and you should update it. Just click the button below and wait for the update process until it completes.
                      Do not refresh the page before it completes. The update could take few minutes and it will automatically refresh the page.
                      </Trans>
                      <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button color="warning" size="lg" onClick={ () => this.doUpdate() }>Update now</Button>
                      </div>
                    </Jumbotron>
                  }
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMcu: () => {
      dispatch(updateMcu())
    },
    updateProgressMcu: () => {
      dispatch(updateProgressMcu())
    }
  }
}

const mapStateToProps = state => {
  return {
    mcuManage: state.mcuManage.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalsUpdate);
