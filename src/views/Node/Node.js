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

import moment from 'moment';

import { I18n } from "@lingui/react";
import { Trans } from '@lingui/macro';

import DashboardWidget from '../Widgets/DashboardWidget';

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

    const { blockchainInfo, connectionCount, miningInfo, peerInfo } = node.stats;

    // Calculate sizeOnUsb
    let sizeOnUsbInGb = null;
    if (mcu && mcu.stats && mcu.stats.disks) {
      const usbDisk = mcu.stats.disks.filter((disk) => {
        return disk.mountPoint === '/media/usb0';
      })[0];

      if (usbDisk) { sizeOnUsbInGb = usbDisk.total / 1000000000; }
    }

    let sizeOnDiskInGb = null;
    if (blockchainInfo.sizeOnDisk) {
      sizeOnDiskInGb = blockchainInfo.sizeOnDisk / 1000000000;
    }

    let sizeProgressValue = null;
    let sizeSecondaryValue = null;
    if (sizeOnUsbInGb && sizeOnDiskInGb) {
      sizeProgressValue = parseInt((sizeOnDiskInGb / sizeOnUsbInGb) * 100);
      sizeSecondaryValue = (((sizeOnUsbInGb - sizeOnDiskInGb) / sizeOnUsbInGb) * 100).toFixed(2);
    }

    // Truncate instead of round: secondaryValue
    // Since being stuck at 99.99% looks better than 100.00%
    return (
      <div ref='main'>
        <div className='animated fadeIn'>
          <Row>
            <Col xs='12' md='6'>
              {blockchainInfo.headers && blockchainInfo.blocks === blockchainInfo.headers &&
                <DashboardWidget
                  bgColor='bg-gray-300'
                  icon='fa fa-clock'
                  value={blockchainInfo.blocks}
                  title='Current Blocks'
                  progressColor='success'
                  progressValue={100}
                  secondaryTitle='Last Block'
                  secondaryValue={blockchainInfo.blockTime && moment().utc().subtract(blockchainInfo.blockTime, 'seconds').format('mm:ss')}
                />
              }
              {blockchainInfo.headers && blockchainInfo.blocks < blockchainInfo.headers &&
                <DashboardWidget
                  bgColor='bg-gray-300'
                  icon='fa fa-clock'
                  value={`${blockchainInfo.blocks} / ${blockchainInfo.headers}`}
                  title='Syncing Blocks'
                  progressColor='warning'
                  progressValue={parseInt((blockchainInfo.blocks / blockchainInfo.headers) * 100)}
                  secondaryTitle='Block Sync Progress'
                  secondaryValue={`${(Math.floor((blockchainInfo.blocks / blockchainInfo.headers) * 100 * 100) / 100).toFixed(2)}%`}
                />
              }
            </Col>

            <Col xs='12' md='6'>
              <DashboardWidget
                bgColor='bg-light'
                icon='fa fa-fire'
                value={!!(miningInfo.networkhashps) ? `${(miningInfo.networkhashps / 1000000000000).toFixed(2)} Th/s` : '0 Th/s'}
                title='Network Hashrate'
                hideProgress={true}
                progressColor='success'
                progressValue={100}
                secondaryTitle='Network Difficulty'
                secondaryValue={miningInfo.difficulty && miningInfo.difficulty.toFixed(2)}
              />
            </Col>
          </Row>

          <Row>
            <Col xs='12' md='6'>
              {connectionCount &&
                <DashboardWidget
                  bgColor='bg-gray-300'
                  icon='fa fa-broadcast-tower'
                  value={`${connectionCount} / 16`}
                  title='Connections'
                  progressColor={connectionCount > 8 ? 'success': 'danger'}
                  progressValue={parseInt((connectionCount / 16) * 100)}
                  secondaryTitle={connectionCount === 8 ? 'Only inbound connections detected, please enable port 9333 on your router port forwarding rules for your Apollo IP address' : null}
                  wrapSecondary={true}
                  hideSecondaryValue={true}
                />
              }
            </Col>

            <Col xs='12' md='6'>
              {blockchainInfo.sizeOnDisk &&
                <DashboardWidget
                  bgColor='bg-gray-300'
                  icon='fa fa-hdd'
                  value={`${sizeOnDiskInGb.toFixed(2)} GB`}
                  title='Blockchain Size'
                  progressColor={sizeProgressValue > 90 ? 'danger' : sizeProgressValue > 70 ? 'warning' : 'success'}
                  progressValue={sizeProgressValue}
                  secondaryTitle='Remaining Space'
                  secondaryValue={`${sizeSecondaryValue}%`}
                />
              }
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
                        {peerInfo.map(function(peer, index) {
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
