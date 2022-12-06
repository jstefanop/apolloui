import { connect } from 'react-redux';
import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Form,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button,
} from 'reactstrap';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import { Trans } from '@lingui/macro';

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

    let donation = false;
    let donationValue = 1;

    this.state = {
      pools: cloneDeep(pools),
      donation: donation,
      donationValue: donationValue,
      errors: {}
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSaveAndRestart = this.handleSaveAndRestart.bind(this);
    this.validate = this.validate.bind(this);
    
    this.marks = {
      donation: {
        min: 1,
        max: 10,
        data: {
          1: 'Min',
          2: '2%',
          3: '3%',
          4: '4%',
          5: '5%',
          6: '6%',
          7: '7%',
          8: '8%',
          9: '9%',
          10: 'Max'
        }
      }
    };
  }

  validate() {
    if (!this.state.pools[0]) return;
    const errors = {};
    const {
      enabled,
      donation,
      url,
      username,
      password,
      proxy,
    } = this.state.pools[0];

    this.setState({
      errors: {},
    });

    if (!url) {
      errors.url = 'Required';
    } else {
      try {
        const fakeUrl = url.replace('stratum+tcp', 'http');
        const parsedUrl = new URL(fakeUrl); // eslint-disable-line no-new
        if (!parsedUrl.port) errors.url = 'Url hasn\'t any port are you sure is it right? (it should be something like stratum+tcp://stratum.slushpool.com:3333)';
      } catch (err) {
        errors.url = 'URL has to be valid URL.';
      }
    }

    if (proxy) {
      try {
        new URL(proxy); // eslint-disable-line no-new
      } catch (err) {
        errors.proxy = 'Proxy has to be valid URL.';
      }
    }

    if (!username) {
      errors.username = 'Required';
    } else {
      if (username.match(/[!@"\'#$%^&*(),?:{}|<>\[\]]/g)) errors.username = 'Characters not allowed (only - , _ and .)';
    }

    if (!password) {
      errors.password = 'Required';
    }

    if (Object.keys(errors).length !== 0) {
      this.setState({
        errors,
      });
      return;
    }

    console.log(errors)

    return errors;
  }

  onChangePool(event, index) {
    const { pools } = this.state;

    const pool = pools.find(el => el.index === index);

    pool[event.target.name] = event.target.value;

    this.validate();

    this.setState({
      pools,
    });
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

  onSelect(evt) {
    const { pools } = this.state;
    pools.map(pool => {
      if (pool.donation) {
        pool.enabled = evt
      }
      return pool;
    });
    
    this.setState({
      pools: pools,
      donation: evt
    })
  }

  onChange(evt) {
    const { pools } = this.state;
    pools.map(pool => {
      if (pool.donation) {
        pool.donation = evt
      }
      return pool;
    });
    
    this.setState({
      donationValue: evt
    })
  }

  render() {
    const {
      pools,
      donation,
      donationValue,
      errors
    } = this.state;

    const {
      pools: oldPools,
    } = this.props;

    const isChanged = !isEqual(sortBy(pools, [pool => pool.index]), sortBy(oldPools, [pool => pool.index]));
    return (
      <div className="animated fadeIn">
        { (isChanged && !Object.keys(errors).length) &&
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
        }

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
                    (!pool.donation) && <SettingsPoolItem
                      pool={ pool }
                      disabled={ false }
                      key={ pool.index }
                      toggleEnabled={ () => this.handleToggleEnabled(pool.index) }
                      onDelete={ () => this.handleDelete(pool.index) }
                      onMoveUp={ () => this.handleMove({ index: pool.index, direction: 'up' }) }
                      onMoveDown={ () => this.handleMove({ index: pool.index, direction: 'down' }) }
                      onChange={ (evt) => this.onChangePool(evt, pool.index) }
                      errors={ this.state.errors }
                    />
                  ))}
                  { !pools.length && <SettingsPoolItemForm onAdd={this.handleAdd} onValidate={this.validate} /> }
                </CardBody>
              </Card>

            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveAndRestart: (pools) => {
    dispatch(updatePoolsAndRestartMiner(pools));
  },
});

export default connect(null, mapDispatchToProps)(SettingsPools);
