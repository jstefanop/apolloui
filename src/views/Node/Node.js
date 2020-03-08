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
    const { loadingNode, node, nodeError } = this.props;

    return (
      <div ref='main'>
        {nodeError && <Alert color='warning'>There is a problem fetching system stats (<b>{nodeError}</b>)</Alert>}
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
    node: state.nodeStats.data,
    nodeError: state.nodeStats.error
  }
};

export default connect(mapStateToProps)(Node);
