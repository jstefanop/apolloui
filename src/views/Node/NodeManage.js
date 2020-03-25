import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'

import { LoadingErrorBox } from '../Loading';
import { startNode, stopNode } from '../../actions/node'

class NodeManage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalsWaiting: false,
      progressValue: 0,
      title: 'Please wait while node is starting up',
      subtitle: 'This takes 5–15 minutes, and you will be redirected to the node dashboard',
      showProgress: false,
      icon: 'fa-cog fa-spin'
    };
  }

  componentDidMount () {
    // Set startNode to a delay that will never be reached on a successful Node launch: 25 minutes
    let timeout = 1500000;
    switch (this.props.location.pathname) {
      case '/node/start':
        this.props.startNode();
        break;
      case '/node/stop':
        this.props.stopNode();
        this.setState({
          title: 'Node is shutting down...',
          subtitle: 'Do not power down your Apollo until the node has fully shut down, which can take up to a minute',
          showProgress: false,
          icon: 'fa-stop-circle animated flash'
        });
        timeout = 60000;
        break;
      default:
        break;
    }

    this.timeoutHandler = setTimeout(() => {
      this.setState({ modalsWaiting: false });
      this.props.redirect();
    }, timeout);

    this.intervalHandler = setInterval(() => {
      this.setState({ progressValue: this.state.progressValue + 3.33 });
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

  componentDidUpdate () {
    const { node, redirect } = this.props;

    // If headers present, redirect to Node page
    if (node && node.stats && node.stats.blockchainInfo && node.stats.blockchainInfo.headers) {
      redirect();
    }
  }

  render() {
    const { node } = this.props;

    // Display loading message
    let secondSubtitle = null;
    if (node && node.stats && node.stats.error && node.stats.error.code && node.stats.error.code === '-28') {
      secondSubtitle = node.stats.error.message;
    }

    return (
      <div>
        <LoadingErrorBox
          show={true}
          bg='bg-0'
          title={this.state.title}
          centerTitle={true}
          subtitle={this.state.subtitle}
          secondSubtitle={secondSubtitle}
          centerSubtitle={true}
          icon={this.state.icon}
          showBtn={false}
          showProgress={this.state.showProgress}
          progress={this.state.progressValue}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNode: () => {
      dispatch(startNode())
    },
    stopNode: () => {
      dispatch(stopNode())
    },
    redirect: () => {
      dispatch(push('/node'))
    }
  }
}

const mapStateToProps = (state) => {
  return { node: state.nodeStats.data };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeManage);
