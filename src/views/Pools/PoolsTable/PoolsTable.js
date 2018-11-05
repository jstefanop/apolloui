import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form,
  Table,
  Button,
  Badge
} from 'reactstrap';

import DisplayHashrate from '../../Filters/DisplayHashrate';
import moment from 'moment';

import { Trans } from '@lingui/macro';
import { I18n } from "@lingui/react"

class PoolsTable extends Component {

  render() {
    const { pools, utility } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <Table responsive className="table-outline d-none d-sm-table">
            <thead className="bg-light">
              <tr>
                <th className="text-center"><i className="fa fa-tasks"></i></th>
                <th><Trans>Url</Trans></th>
                <th><Trans>Type</Trans></th>
                <th><Trans>Status</Trans></th>
                <th><Trans>Hashrate</Trans></th>
                <th>Last share</th>
                <th>Acc</th>
                <th>Rej</th>
                <th>Dis</th>
                <th>Get</th>
                <th><Trans>Username</Trans></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              { pools.data.map(function(pool, index){
                return <tr key={index}>
                    <td className="text-center">
                      <Button><Trans>Select</Trans></Button>
                    </td>
                    <td>
                      <div className="font-weight-bold text-muted">{ pool.url }</div>
                    </td>
                    <td className="text-center">
                      <h5 className="mb-0"><Badge color={ pool.stratumActive ? 'primary' : 'light' }>{ pool.stratumActive ? 'Main' : 'Failover' }</Badge></h5>
                    </td>
                    <td>
                      <h5 className="mb-0"><Badge color={ pool.status === 'Alive' ? 'success' : 'danger' }>{ pool.status }</Badge></h5>
                    </td>
                    <td className="text-center">
                    { (pool.stratumActive) ? 
                      <h6 className="mb-0 font-weight-bold">
                        <i className="fa fa-fire text-secondary"></i> { DisplayHashrate(utility * 71582788, 'h') }
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
                    <td>{ pool.user }</td>
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