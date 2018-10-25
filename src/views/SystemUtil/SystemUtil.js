import React, { Component } from 'react';
import {
  Progress
} from 'reactstrap';

import { Trans } from '@lingui/macro';

class SystemUtil extends Component {
 
   render() {

    return (
      <div>
        <h6>System Utilization</h6>

        <div className="text-uppercase mb-1 mt-4">
          <small><b><Trans>CPU Usage</Trans></b></small>
        </div>
        <Progress className="progress-xs" color="info" value="25" />
        <small className="text-muted">348 Processes. 1/4 Cores.</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b><Trans>Memory Usage</Trans></b></small>
        </div>
        <Progress className="progress-xs" color="warning" value="70" />
        <small className="text-muted">11444GB/16384MB</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b><Trans>SSD 1 Usage</Trans></b></small>
        </div>
        <Progress className="progress-xs" color="danger" value="95" />
        <small className="text-muted">243GB/256GB</small>
      </div>
    );
  }
}

export default SystemUtil;
