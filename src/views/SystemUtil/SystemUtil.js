import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Progress
} from 'reactstrap';

import { bytesToSize, percentColor } from '../Filters';
import { Trans } from '@lingui/macro';

class SystemUtil extends Component {

   render() {

    const { mcu } = this.props;

    const memoryPercent = Math.round(mcu.stats.memory.available * 100 / mcu.stats.memory.total * 100) / 100

    return (
      <div className="mt-4">
        <h6>System Utilization</h6>

        <div className="text-uppercase mb-1 mt-4">
          <small><b><Trans>CPU Usage</Trans></b></small>
        </div>
        <Progress className="progress-xs" color={ percentColor(mcu.stats.cpu.usedPercent) } value={ mcu.stats.cpu.usedPercent } />
        <small className="text-muted">{ mcu.stats.cpu.usedPercent }% Used. { mcu.stats.cpu.threads } Cores.</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b><Trans>Memory Usage</Trans></b></small>
        </div>
        <Progress className="progress-xs" color={ percentColor(memoryPercent) } value={ memoryPercent } />
        <small className="text-muted">{ bytesToSize(mcu.stats.memory.available * 1024) } / { bytesToSize(mcu.stats.memory.total * 1024) }</small>

        { mcu.stats.disks.map(function(disk, index) {
          const diskPercent = Math.round(disk.used * 100 / disk.total * 100) / 100;
          return <div key={index}>
              <div className="text-uppercase mb-1 mt-2">
                <small><b><Trans>Disk { disk.mountPoint } Usage</Trans></b></small>
              </div>
              <Progress className="progress-xs" color={ percentColor(diskPercent) } value={ diskPercent } />
              <small className="text-muted">{ bytesToSize(disk.used * 1024) } / { bytesToSize(disk.total * 1024) }</small>
            </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingMcu: state.mcuStats.loading,
    mcu: state.mcuStats.data,
    mcuError: state.mcuStats.error
  }
}

export default connect(mapStateToProps)(SystemUtil);
