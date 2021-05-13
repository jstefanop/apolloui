import _ from 'lodash';
import React, { Component } from 'react';
import {
  Table,
  Badge
} from 'reactstrap';

import { displayHashrate } from '../Filters';
import moment from 'moment';

import { Trans } from '@lingui/macro';

class HashboardsTable extends Component {

  render() {
    const { miner } = this.props;

    return (
      <Table responsive className="table-outline d-table d-sm-table">
        <thead className="bg-light">
          <tr>
            <th><Trans>Status</Trans></th>
            <th><Trans>ID</Trans></th>
            <th><Trans>Hashrate</Trans></th>
            <th><Trans>Temp</Trans></th>
            <th><Trans>Fan Speed</Trans></th>
            <th><Trans>Power</Trans></th>
            <th><Trans>Voltage</Trans></th>
            <th><Trans>Error</Trans></th>
            <th><Trans>Active ASICs</Trans></th>
          </tr>
        </thead>
        <tbody className="bg-white"> 
          { miner.stats
            .sort((a, b) => a.uuid > b.uuid ? 1 : -1)
            .map((hashboard, i) => 
            <tr key={i}>
              <td className="">
                <h5 className="mb-0"><Badge color={ (hashboard.status) ? 'success' : 'light' }>{ (hashboard.status) ? 'Active' : 'Inactive' }</Badge></h5>
              </td>
              <td>
                <div className="font-weight-bold text-muted"><small>HASHBOARD #</small>{i}</div>
              </td>
              <td>
                <h6 className={`mb-0 ${hashboard.status ? "font-weight-bold" : "text-secondary"}`}>
                  <i className="fa fa-fire text-secondary"></i> { displayHashrate(hashboard.status ? hashboard.slots.int_0.ghs : 0, 'gh') }
                </h6>
              </td>
              <td>
                { (hashboard.status) ? hashboard.slots.int_0.temperature : '-' }{ hashboard.status && <small>°c</small>}
              </td>
              <td>
                { (hashboard.status) ? hashboard.fans.int_0.rpm[0] : '-' } { hashboard.status && <small>rpm</small>}
              </td>
              <td>
                { (hashboard.status) ? (hashboard.slots.int_0.wattPerGHs * hashboard.slots.int_0.ghs).toFixed(0) : '-' } { hashboard.status && <small>W</small>}
              </td>
              <td>
                { (hashboard.status) ? (hashboard.slots.int_0.wattPerGHs * hashboard.slots.int_0.ghs / _.sum(hashboard.slots.int_0.currents) * 1000).toFixed(2) : '-' } { hashboard.status && <small>v</small>}
              </td>
              <td>
                { (hashboard.status) ? hashboard.slots.int_0.errorRate || 0 : '-' }{ hashboard.status && <small>%</small>}
              </td>
              <td>
                { (hashboard.status) ? hashboard.slots.int_0.chips : '-' }
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default HashboardsTable;
