import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'

import { LoadingErrorBox } from '../Loading';
import { startMiner } from '../../actions/miner'

class MinerStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsWaiting: false,
      progressValue: 0
    }
  }

  componentDidMount () {
    this.props.startMiner();
    this.timeoutHandler = setTimeout(() => {
      this.setState({
        modalsWaiting: false
      });
      this.props.redirect();
    }, 30000);
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
          title="Please wait while miner is warming up"
          centerTitle={true}
          subtitle="This takes about 30 seconds after that you will be redirect to the dashboard"
          icon="fa-cog fa-spin"
          showBtn={false}
          showProgress={true}
          progress={this.state.progressValue}
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
    redirect: () => {
      dispatch(push('/dashboard'))
    }
  }
}

export default connect(null, mapDispatchToProps)(MinerStart);
