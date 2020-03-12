import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Alert,
  Card,
  CardBody,
  Col,
  Row,
  Table
} from 'reactstrap';

import { I18n } from "@lingui/react";
import { Trans } from '@lingui/macro';

class Node extends Component {
  render() {
    // TODO: Use loadingNode
    const { loadingNode, mcu, node, nodeError } = this.props;

    // If less memory than 500 MB, return Alert and prevent page load
    if (mcu && mcu.stats && mcu.stats.memory && mcu.stats.memory.total && mcu.stats.memory.total < 500000) {
      return (
        <div ref='main'>
          <Alert color='warning'>There is a problem fetching system stats (<b>MCU must have at least 512 MB of memory to view this page</b>)</Alert>
        </div>
      )
    }

    // Something is very wrong and likely not loading error
    if (nodeError) {
      return (
        <div ref='main'>
          <Alert color='warning'>There is a problem fetching system stats (<b>{nodeError}</b>)</Alert>
        </div>
      )
    } else if (node && node.stats && node.stats.error) {
      // Handle loading errors (e.g., Litecoin client off, loading, etc.)
      let loadingErrorMessage = null
      // If Litecoin client off, display constant message
      if (node.stats.error.code === 'ECONNREFUSED') {
        loadingErrorMessage = 'Node is currently offline'
      } else if (node.stats.error.code === '-28') {
        loadingErrorMessage = 'Node is currently loading'
      } else {
        // Every other loading error
        loadingErrorMessage = node.stats.error.message
      }

      return (
        <div ref='main'>
          <Alert color='warning'>There is a problem fetching system stats (<b>{loadingErrorMessage}</b>)</Alert>
        </div>
      )
    }

    return (
      <div ref='main'>
        <div className='animated fadeIn'>
          <Row>
            <Col xs='12' md='6'>
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{node.stats.blockCount}</div>
                  <div><Trans>Blocks</Trans></div>
                </CardBody>
              </Card>
            </Col>

            <Col xs='12' md='6'>
              <Card className="bg-light">
                <CardBody>
                  <div className="h4 m-0">{node.stats.connectionCount}</div>
                  <div><Trans>Connections</Trans></div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <h4><Trans>Connections</Trans></h4>
              <div>
                <I18n>
                  {({ i18n }) => (
                    <Table responsive className="table-outline d-table d-sm-table">
                      <thead className="bg-light">
                        <tr>
                          <th><Trans>IP</Trans></th>
                          <th><Trans>Client</Trans></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {node.stats.peerInfo.map(function(peer, index) {
                          return (
                            <tr key={index}>
                              <td>
                                <div className="font-weight-bold text-muted">{peer.addr}</div>
                              </td>
                              <td>
                                {peer.subver}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  )}
                </I18n>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingNode: state.nodeStats.loading,
    mcu: state.mcuStats.data,
    node: state.nodeStats.data,
    nodeError: state.nodeStats.error
  }
};

export default connect(mapStateToProps)(Node);
