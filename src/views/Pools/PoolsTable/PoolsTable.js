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
    return (
      <I18n>
        {({ i18n }) => (
          <Table responsive className="table-outline d-table d-sm-table">
            <thead className="bg-light">
              <tr>
                <th><Trans>Url</Trans></th>
                <th><Trans>Active</Trans></th>
                <th><Trans>Hashrate</Trans></th>
                <th>Last share</th>
                <th>Diff</th>
                <th>Acc</th>
                <th>Rej</th>
                <th className="text-center"><Trans>Username</Trans></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              { pools.map((pool, i) => 
                <tr key={i}>
                  <td>
                    <div className="font-weight-bold text-muted">{ `${pool.host}:${pool.port}` }</div>
                  </td>
                  <td className="">
                    <h5 className="mb-0"><Badge color={ (pool.intervals.int_0.sharesSent > 0) ? 'success' : 'light' }>{ (pool.intervals.int_0.sharesSent > 0) ? 'Active' : 'Inactive' }</Badge></h5>
                  </td>
                  <td>
                    <h6 className="mb-0 font-weight-bold">
                      <i className="fa fa-fire text-secondary"></i> { displayHashrate(miner.stats[i].master.intervals.int_0.bySol, 'gh') }
                    </h6>
                  </td>
                  <td>
                    { pool.lastShareTime ? moment().to(moment(pool.lastShareTime, 'X')) : 'Never' }
                  </td>
                  <td>
                    { pool.diff || 0 }
                  </td>
                  <td>
                    { pool.intervals.int_0.sharesAccepted || 0 }
                  </td>
                  <td>
                    { pool.intervals.int_0.sharesRejected || 0 }
                  </td>
                  <td className="text-center small">{ pool.userName }</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </I18n>
    );
  }
}

export default PoolsTable;
