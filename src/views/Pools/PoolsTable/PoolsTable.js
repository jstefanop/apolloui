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
    const { pools, utility } = this.props;
    const mainHashrate = (utility * 71582788);

    pools.data = _.sortBy(pools.data, 'priority');

    return (
      <I18n>
        {({ i18n }) => (
          <Table responsive className="table-outline d-table d-sm-table">
            <thead className="bg-light">
              <tr>
                <th><Trans>Url</Trans></th>
                <th><Trans>Type</Trans></th>
                <th><Trans>Active</Trans></th>
                <th><Trans>Status</Trans></th>
                <th><Trans>Quota</Trans></th>
                <th><Trans>Hashrate</Trans></th>
                <th>Last share</th>
                <th>Acc</th>
                <th>Rej</th>
                <th>Dis</th>
                <th>Get</th>
                <th className="text-center"><Trans>Username</Trans></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              { pools.data.map(function(pool, index) {
                return <tr key={index}>
                    <td>
                      <div className="font-weight-bold text-muted">{ pool.url }</div>
                    </td>
                    <td className="">
                      <h5 className="mb-0">
                        { (pool.user === 'jstefanop.a1') ?
                          <Badge color="warning">Donation</Badge>
                        :
                          <Badge color={ !pool.priority ? 'primary' : 'light' }>{ !pool.priority ? 'Main' : 'Failover' }</Badge> }
                      </h5>
                    </td>
                    <td className="">
                      <h5 className="mb-0"><Badge color={ pool.stratumActive ? 'success' : 'light' }>{ pool.stratumActive ? 'Active' : 'Inactive' }</Badge></h5>
                    </td>
                    <td>
                      <h5 className="mb-0"><Badge color={ pool.status === 'Alive' ? 'success' : 'danger' }>{ pool.status }</Badge></h5>
                    </td>
                    <td>
                      <h6 className="mb-0">{ pool.quota ? pool.quota + '%' : 'No quota'}</h6>
                    </td>
                    <td>
                    { (pool.stratumActive) ? 
                      <h6 className="mb-0 font-weight-bold">
                        <i className="fa fa-fire text-secondary"></i> { (pool.quota > 0 && pools.data && pools.data.length > 1) ? displayHashrate((mainHashrate * pool.quota / 100), 'h') : displayHashrate(mainHashrate, 'h') }
                      </h6>
                      :
                      <span>Not active</span>
                    }
                    </td>
                    <td>
                      { pool.lastShareTime ? moment().to(moment(pool.lastShareTime, 'X')) : 'Never' }
                    </td>
                    <td>
                      { pool.accepted }
                    </td>
                    <td>
                      { pool.rejected }
                    </td>
                    <td>
                      { pool.discarded }
                    </td>
                    <td>
                      { pool.getworks }
                    </td>
                    <td className="text-center">{ (pool.user === 'jstefanop.a1') ? <i className="fa fa-gift" /> : pool.user }</td>
                  </tr>
              })}
            </tbody>
          </Table>
        )}
      </I18n>
    );
  }
}

export default PoolsTable;
