import _ from 'lodash';
import React, { Component } from 'react';
import {
  Table,
  Badge
} from 'reactstrap';

import { displayHashrate } from '../Filters';
import moment from 'moment';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class HashboardsTable extends Component {

  render() {
    const { miner } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <Table responsive className="table-outline d-table d-sm-table">
            <thead className="bg-light">
              <tr>
                <th><Trans>ID</Trans></th>
                <th><Trans>Status</Trans></th>
                <th><Trans>Hashrate</Trans></th>
                <th>Temp</th>
                <th>Fan Speed</th>
                <th>Power</th>
                <th>Voltage</th>
                <th>Error</th>
                <th>Active ASICs</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              { miner.stats.map((hashboard, i) => 
                <tr key={i}>
                  <td>
                    <div className="font-weight-bold text-muted"><small>#</small>{hashboard.uuid}</div>
                  </td>
                  <td className="">
                    <h5 className="mb-0"><Badge color={ (hashboard.pool.intervals.int_0.sharesSent > 0) ? 'success' : 'light' }>{ (hashboard.pool.intervals.int_0.sharesSent > 0) ? 'Active' : 'Inactive' }</Badge></h5>
                  </td>
                  <td>
                    <h6 className="mb-0 font-weight-bold">
                      <i className="fa fa-fire text-secondary"></i> { displayHashrate(hashboard.slots.int_0.ghs, 'gh') }
                    </h6>
                  </td>
                  <td>
                    { hashboard.slots.int_0.temperature }<small>°c</small>
                  </td>
                  <td>
                    { hashboard.fans.int_0.rpm[0] } <small>rpm</small>
                  </td>
                  <td>
                    { (hashboard.slots.int_0.wattPerGHs * hashboard.slots.int_0.ghs).toFixed(0) } <small>W</small>
                  </td>
                  <td>
                    { (hashboard.slots.int_0.wattPerGHs * hashboard.slots.int_0.ghs / _.sum(hashboard.slots.int_0.currents)).toFixed(4) }
                  </td>
                  <td>
                    { hashboard.slots.int_0.errorRate || 0 }<small>%</small>
                  </td>
                  <td>
                    { hashboard.slots.int_0.chips }
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </I18n>
    );
  }
}

export default HashboardsTable;
