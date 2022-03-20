import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'

import { LoadingErrorBox } from '../Loading';
import { startMiner, restartMiner, stopMiner } from '../../actions/miner'

class MinerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsWaiting: false,
      progressValue: 0,
      title: 'Please wait while miner is warming up',
      subtitle: 'This takes about 30 seconds after that you will be redirect to the dashboard',
      showProgress: true,
      icon: 'fa-cog fa-spin'
    }
  }

  componentDidMount () {
    let timeout = 30000;
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
          title: 'Miner is stopping...',
          subtitle: 'You will be redirect to the dashboard in few seconds',
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
      this.setState({
        progressValue: this.state.progressValue + 3.33
      });
    }, 1000);
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
    }
  }
}

export default connect(null, mapDispatchToProps)(MinerManage);
