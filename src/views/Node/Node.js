import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'
import {
  Alert,
  Col,
  Row,
  Table
} from 'reactstrap';

import moment from 'moment';

import { Trans, t } from '@lingui/macro';

import DashboardWidget from '../Widgets/DashboardWidget';

import { LoadingErrorBox } from '../Loading';

class Node extends Component {
  // If node once had headers but now has error, do not render again
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps && nextProps.node && nextProps.node.stats && nextProps.node.stats.error && nextProps.node.stats.error.code) {
      const errorCode = nextProps.node.stats.error.code;

      // Code of -32602 means 500
      if (errorCode === 'ESOCKETTIMEDOUT' || errorCode === 'ETIMEDOUT' || errorCode === '-32602') {
        return false;
      }
    }

    return true;
  }

  render() {
    const { loadingNode, mcu, node, nodeError, redirectToNodeManage, settings } = this.props;

    // If less memory than 500 MB, return Alert and prevent page load
    if (mcu && mcu.stats && mcu.stats.memory && mcu.stats.memory.total && mcu.stats.memory.total < 500000) {
      return (
        <LoadingErrorBox
          show={true}
          bg='bg-0'
          title={t`Batch 1 controllers do not have the necessary RAM to run a full node`}
          centerTitle={true}
          subtitle={t`We made a Batch 1 upgrade kit available below`}
          error={false}
          centerSubtitle={true}
          icon='fa-exclamation-triangle animated bounce'
          showLink={true}
          linkTo='https://shop.futurebit.io/products/apollo-full-node-upgrade-kit'
          linkText={t`FutureBit Batch 1 Upgrade Kit`}
        />
      )
    }

    // Node offline state
    if (node && node.stats && node.stats.error) {
      if (node.stats.error.code === 'ECONNREFUSED') {
        const loadingErrorBoxSubtitle = t`Double-check your USB node drive is plugged in the USB port in the back of your Apollo, properly formatted with the folder name "Bitcoin" in the root directory, and press the Start button below`;

        return (
          <LoadingErrorBox
            show={true}
            bg='bg-0'
            title='Node is offline'
            centerTitle={true}
            subtitle={loadingErrorBoxSubtitle}
            error={false}
            centerSubtitle={true}
            icon='fa-toggle-off animated bounce'
            showBtn={true}
            btnTo='/node/start'
            btnText='Start'
          />
        )
      } else if (node.stats.error.code === '-28') {
        redirectToNodeManage();
      }
    }

    // Something is very wrong and likely not loading error
    if (nodeError) {
      return (
        <div ref='main'>
          <Alert color='warning'><Trans>There is a problem fetching system stats</Trans> (<b>{nodeError}</b>)</Alert>
        </div>
      )
    } else if (node && node.stats && node.stats.error) {
      // Handle loading errors (e.g., Bitcoin client off, loading, etc.)
      let loadingErrorMessage = null

      // If Bitcoin client off, display constant message
      if (node.stats.error.code === '-28') {
        loadingErrorMessage = t`Node is currently loading`
      } else {
        // Every other loading error
        loadingErrorMessage = node.stats.error.message
      }

      return (
        <div ref='main'>
          <Alert color='warning'><Trans>There is a problem fetching system stats</Trans> (<b>{loadingErrorMessage}</b>)</Alert>
        </div>
      )
    }

    const { blockchainInfo, connectionCount, miningInfo, peerInfo, networkInfo } = node.stats;

    // Get version
    const version = (networkInfo.subversion) && networkInfo.subversion.match(/\d+(\.\d+)+/);

    // Calculate sizeOnUsb
    let sizeOnUsbInGb = null;
    if (mcu && mcu.stats && mcu.stats.disks) {
      const usbDisk = mcu.stats.disks.filter((disk) => {
        return disk.mountPoint === '/media/nvme';
      })[0];

      if (usbDisk) { sizeOnUsbInGb = usbDisk.total / 1000000; }
    }

    let sizeOnDiskInGb = null;
    if (blockchainInfo.sizeOnDisk) {
      sizeOnDiskInGb = blockchainInfo.sizeOnDisk / 1000000000;
    }

    let sizeProgressValue = null;
    let sizeSecondaryValue = 0;
    if (sizeOnUsbInGb && sizeOnDiskInGb) {
      sizeProgressValue = parseInt((sizeOnDiskInGb / sizeOnUsbInGb) * 100);
      sizeSecondaryValue = (((sizeOnUsbInGb - sizeOnDiskInGb) / sizeOnUsbInGb) * 100).toFixed(2);
    }

    let secondaryTitle = null;
    if (settings.nodeEnableTor) secondaryTitle = t`Your connection is anonymous because you are using Tor. Connections may take more time to be discovered.`
    else if (!settings.nodeEnableTor && connectionCount < 11) secondaryTitle = t`Only inbound connections detected, please enable port 8333 on your router port forwarding rules for your Apollo IP address.`

    // Truncate instead of round: secondaryValue
    // Since being stuck at 99.99% looks better than 100.00%
    return (
      <div ref='main'>
        <div className='animated fadeIn'>
          <div style={{marginBottom: '20px'}}>Bitcoin Core <strong>{version && `v${version[0]}`}</strong> - TOR<i className={settings.nodeEnableTor ? 'fa fa-lock mr-2 ml-2 initialism text-success' : 'fa fa-lock-open mr-2 ml-2 initialism'} /><strong>{settings.nodeEnableTor ? 'enabled' : 'disabled'}</strong></div>
          <Row>
            <Col xs='12' md='6'>
              {blockchainInfo.headers && blockchainInfo.blocks === blockchainInfo.headers &&
                <DashboardWidget
                  bgColor='bg-dark'
                  icon='fa fa-clock'
                  value={blockchainInfo.blocks.toLocaleString()}
                  title={t`Current Blocks`}
                  progressColor='success'
                  progressValue={100}
                  secondaryTitle={t`Last Block`}
                  secondaryValue={blockchainInfo.blockTime && moment().utc().subtract(blockchainInfo.blockTime, 'seconds').format('mm:ss')}
                />
              }
              {blockchainInfo.headers && blockchainInfo.blocks < blockchainInfo.headers &&
                <DashboardWidget
                  bgColor='bg-dark'
                  icon='fa fa-clock'
                  value={`${blockchainInfo.blocks.toLocaleString()} / ${blockchainInfo.headers.toLocaleString()}`}
                  title={t`Syncing Blocks`}
                  progressColor='warning'
                  progressValue={parseInt((blockchainInfo.blocks / blockchainInfo.headers) * 100)}
                  secondaryTitle={t`Block Sync Progress`}
                  secondaryValue={`${(Math.floor((blockchainInfo.blocks / blockchainInfo.headers) * 100 * 100) / 100).toFixed(2)}%`}
                />
              }
            </Col>

            <Col xs='12' md='6'>
              <DashboardWidget
                bgColor='bg-info'
                icon='fa fa-fire'
                value={!!(miningInfo.networkhashps) ? `${new Intl.NumberFormat().format(miningInfo.networkhashps / 1000000000000)} TH/s` : '0 TH/s'}
                title={t`Network Hashrate`}
                hideProgress={true}
                progressColor='success'
                progressValue={100}
                secondaryTitle={t`Network Difficulty`}
                secondaryValue={miningInfo.difficulty && miningInfo.difficulty.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              />
            </Col>
          </Row>

          <Row>
            <Col xs='12' md='6'>
              <DashboardWidget
                bgColor='bg-gray-300'
                icon='fa fa-broadcast-tower'
                value={`${connectionCount} / 32`}
                title={t`Connections`}
                progressColor={connectionCount > 16 ? 'success': 'danger'}
                progressValue={parseInt((connectionCount / 32) * 100)}
                secondaryTitle={secondaryTitle}
                wrapSecondary={true}
                hideSecondaryValue={true}
              />
            </Col>

            <Col xs='12' md='6'>
              {blockchainInfo.sizeOnDisk &&
                <DashboardWidget
                  bgColor='bg-gray-200'
                  icon='fa fa-hdd'
                  value={`${sizeOnDiskInGb.toFixed(2)} GB`}
                  title='Blockchain Size'
                  progressColor={sizeProgressValue > 90 ? 'danger' : sizeProgressValue > 70 ? 'warning' : 'success'}
                  progressValue={sizeProgressValue}
                  secondaryTitle={t`Remaining Space`}
                  secondaryValue={`${sizeSecondaryValue}%`}
                />
              }
            </Col>
          </Row>

          <Row>
            <Col>
              <h4><Trans>Connections</Trans></h4>
              <div>
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    redirectToNodeManage: () => {
      dispatch(push('/node/start'))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loadingNode: state.nodeStats.loading,
    mcu: state.mcuStats.data,
    node: state.nodeStats.data,
    nodeError: state.nodeStats.error,
    settings: state.settings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Node);
