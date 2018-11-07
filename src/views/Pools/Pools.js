import { connect } from 'react-redux';
import React, { Component } from 'react';
import omit from 'lodash/omit';

import { Trans } from '@lingui/macro';
import { Loading } from '../Loading';
import { fetchPools as fetchPoolsAction } from '../../actions/pool';

import SettingsPools from './SettingsPools/SettingsPools';

class Settings extends Component {
  componentDidMount() {
    const {
      fetchPools,
    } = this.props;

    fetchPools();
  }

  render() {
    const {
      poolsData: {
        loading,
        pools,
      },
    } = this.props;

    return (
      loading !== false
        ? <Loading />
        : <SettingsPools pools={pools} />
    );
  }
}

const mapStateToProps = state => ({
  poolsData: {
    loading: state.pools.loading,
    pools: state.pools.pools && state.pools.pools.map(pool => omit(pool, ['id'])),
  },
});

const mapDispatchToProps = dispatch => ({
  fetchPools: () => {
    dispatch(fetchPoolsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
