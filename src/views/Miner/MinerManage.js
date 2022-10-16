import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'

import { LoadingErrorBox } from '../Loading';
import { startMiner, restartMiner, stopMiner, fetchMiner, onlineMiner } from '../../actions/miner'

import { t } from '@lingui/macro';

class MinerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsWaiting: false,
      progressValue: 0,
      title: t`Please wait while miner is warming up`,
      subtitle: t`This takes less than a minute, when miner will be ready you will be redirect to the dashboard`,
      showProgress: true,
      icon: 'fa-cog fa-spin'
    }
  }

  componentDidMount () {
    let timeout = 60000;
    switch (this.props.location.pathname) {
      case '/miner/start':
        this.props.startMiner();
        break;
      case '/miner/restart':
        this.props.restartMiner();
        break;
      case '/miner/stop':
        this.props.stopMiner();
        this.setState({
          title: t`Miner is stopping...`,
          subtitle: t`You will be redirect to the dashboard in few seconds`,
          showProgress: false,
          icon: 'fa-stop-circle animated flash'
        });
        timeout = 5000;
        break;
      default:
        break;
    }

    this.timeoutHandler = setTimeout(() => {
      this.setState({
        modalsWaiting: false
      });
      this.props.redirect();
    }, timeout);

    this.intervalHandler = setInterval(() => {
      this.props.fetchMiner();
      this.props.onlineMiner();

      const { minerCheck, minerError, miner } = this.props;

      const statsReady = (miner.stats && miner.stats.length) || false;
      const statusReady = (minerCheck.online && minerCheck.online.status) || false;

      console.log(`Checking miner to come back: statsReady: ${statsReady}, statusReady: ${statusReady}`);

      if (statusReady) this.setState({ subtitle: t`Miner is now online, we are waiting for first statistics...` });

      if (statsReady && statusReady) {
        this.setState({
          modalsWaiting: false,
          progressValue: 100
        });
        this.props.redirect();
      } else {
        this.setState({
          progressValue: this.state.progressValue + 8.33
        });
      }
    }, 5000);
  }

  componentWillUnmount () {
    if (this.timeoutHandler) {
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = null;
    }
    if (this.intervalHandler) {
        clearTimeout(this.intervalHandler);
        this.intervalHandler = null;
    }
  }

  render() {
    return (
      <div>
        <LoadingErrorBox
          show={true}
          bg="bg-0"
          title={ this.state.title }
          centerTitle={true}
          subtitle={ this.state.subtitle }
          centerSubtitle={true}
          icon={ this.state.icon }
          showBtn={false}
          showProgress={ this.state.showProgress }
          progress={ this.state.progressValue }
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startMiner: () => {
      dispatch(startMiner())
    },
    restartMiner: () => {
      dispatch(restartMiner())
    },
    stopMiner: () => {
      dispatch(stopMiner())
    },
    redirect: () => {
      dispatch(push('/miner'))
    },
    fetchMiner: () => {
      dispatch(fetchMiner())
    },
    onlineMiner: () => {
      dispatch(onlineMiner())
    },
  }
}

const mapStateToProps = state => {
  return {
    miner: state.minerStats.data,
    minerError: state.minerStats.error,
    minerCheck: state.minerOnline.data,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinerManage);
