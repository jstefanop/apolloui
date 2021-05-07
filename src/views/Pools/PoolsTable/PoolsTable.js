import _ from 'lodash';
import React, { Component } from 'react';
import {
  Table,
  Badge
} from 'reactstrap';

import { displayHashrate } from '../../Filters';
import moment from 'moment';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class PoolsTable extends Component {

  render() {
    const { miner } = this.props;
    const pools = _.map(miner.stats, 'pool');
    const sharesSent = _.sumBy(pools, (pool) => { return (pool.status) ? pool.intervals.int_0.sharesSent : 0 });
    const sharesAccepted = _.sumBy(pools, (pool) => { return (pool.status) ? pool.intervals.int_0.sharesAccepted : 0 });
    const sharesRejected = _.sumBy(pools, (pool) => { return (pool.status) ? pool.intervals.int_0.sharesRejected : 0 });
    const hashrate = _.sumBy(miner.stats, (pool) => { return (pool.status) ? pool.master.intervals.int_0.byPool : 0 });
    const pool = _.maxBy(pools, 'diff');

    return (
      <I18n>
        {({ i18n }) => (
          <Table responsive className="table-outline d-table d-sm-table">
            <thead className="bg-light">
              <tr>
                <th><Trans>Status</Trans></th>
                <th><Trans>Url</Trans></th>
                <th><Trans>Hashrate</Trans></th>
                <th>Diff</th>
                <th>Sent</th>
                <th>Acc</th>
                <th>Rej</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pool &&
                <tr>
                  <td className="">
                    <h5 className="mb-0"><Badge color={ (sharesSent > 0) ? 'success' : 'light' }>{ (sharesSent > 0) ? 'Active' : 'Inactive' }</Badge></h5>
                  </td>
                  <td>
                    <div className="font-weight-bold text-muted">{ `${pool.host}:${pool.port}` }</div>
                  </td>
                  <td>
                    <h6 className={`mb-0 ${pool.status ? "font-weight-bold" : "text-secondary"}`}>
                      <i className="fa fa-fire text-secondary"></i> { displayHashrate(hashrate, 'gh') }
                    </h6>
                  </td>
                  <td>
                    { pool.status ? pool.diff : 0 }
                  </td>
                  <td>
                    { sharesSent || 0 }
                  </td>
                  <td>
                    { sharesAccepted || 0 }
                  </td>
                  <td>
                    { sharesRejected || 0 }
                  </td>
                  <td className="text-center small">{ pool.userName }</td>
                </tr>
              }
            </tbody>
          </Table>
        )}
      </I18n>
    );
  }
}

export default PoolsTable;
