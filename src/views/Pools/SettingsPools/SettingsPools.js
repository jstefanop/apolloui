import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button,
} from 'reactstrap';

import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

import isEqual from 'lodash/isEqual';
import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import SettingsPoolItem from './SettingsPoolItem';
import SettingsPoolItemForm from './SettingsPoolItemForm';
import { updatePoolsAndRestartMiner } from '../../../actions/pool';

class SettingsPools extends Component {
  constructor(props) {
    super(props);

    const { pools } = this.props;

    this.state = {
      pools: cloneDeep(pools),
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSaveAndRestart = this.handleSaveAndRestart.bind(this);
  }

  handleSaveAndRestart() {
    const { saveAndRestart } = this.props;
    const { pools } = this.state;

    saveAndRestart(pools);
  }

  handleMove({ index, direction }) {
    const { pools } = this.state;

    const pool1 = pools.find(el => el.index === index);
    const pool2 = pools.find(el => (direction === 'up' ? el.index === index - 1 : el.index === index + 1));

    if (pool2) {
      if (direction === 'up') {
        pool1.index -= 1;
        pool2.index += 1;
      } else {
        pool1.index += 1;
        pool2.index -= 1;
      }
    }

    this.setState({
      pools,
    });
  }

  handleDelete(index) {
    const { pools } = this.state;

    const idx = pools.findIndex(el => el.index === index);
    const deletedPool = pools[idx];

    pools.forEach((pool) => {
      if (pool.index > deletedPool.index) {
        pool.index -= 1; // eslint-disable-line no-param-reassign
      }
    });

    pools.splice(idx, 1);

    this.setState({
      pools,
    });
  }

  handleToggleEnabled(index) {
    const { pools } = this.state;

    const pool = pools.find(el => el.index === index);
    pool.enabled = !pool.enabled;

    this.setState({
      pools,
    });
  }

  handleAdd(pool) {
    const { pools } = this.state;

    pools.push({ ...pool, index: pools.length });

    this.setState({
      pools,
    });
  }

  render() {
    const {
      pools,
    } = this.state;

    const {
      pools: oldPools,
    } = this.props;

    const isChanged = !isEqual(sortBy(pools, [pool => pool.index]), sortBy(oldPools, [pool => pool.index]));
    return (
      <I18n>
        {({ i18n }) => (
          <div className="animated fadeIn">

            <div className="animated fadeIn">
              <Row>
                <Col lg="12">
                  <Card>
                    <CardHeader>
                      <CardTitle><Trans>Pools</Trans></CardTitle>
                      <CardSubtitle className="text-muted"><Trans>Manage pools configuration for your miner</Trans></CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      { sortBy(pools, pool => pool.index).map(pool => (
                        <SettingsPoolItem
                          pool={pool}
                          disabled
                          key={pool.index}
                          toggleEnabled={() => this.handleToggleEnabled(pool.index)}
                          onDelete={() => this.handleDelete(pool.index)}
                          onMoveUp={() => this.handleMove({ index: pool.index, direction: 'up' })}
                          onMoveDown={() => this.handleMove({ index: pool.index, direction: 'down' })}
                        />
                      ))}
                      <SettingsPoolItemForm onAdd={this.handleAdd} />
                    </CardBody>
                  </Card>

                </Col>
              </Row>
            </div>

           { (isChanged) ?
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader className="bg-dark">
                    <Button size="sm" className="btn-warning text-uppercase" onClick={this.handleSaveAndRestart} disabled={!isChanged}><Trans>Save &amp; Restart</Trans></Button>
                    <span className="ml-2"><Trans>You need to restart your miner to apply changes.</Trans></span>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            : null
            }

            <p />
          </div>
        )}
      </I18n>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveAndRestart: (pools) => {
    dispatch(updatePoolsAndRestartMiner(pools));
  },
});

export default connect(null, mapDispatchToProps)(SettingsPools);
