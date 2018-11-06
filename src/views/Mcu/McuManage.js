import { connect } from 'react-redux'
import React, { Component } from 'react';
import { push } from 'connected-react-router'

import { LoadingErrorBox } from '../Loading';
import { rebootMcu, shutdownMcu } from '../../actions/mcu'

class McuManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      title: 'See you soon!',
      showProgress: false,
      icon: 'fa-power-off'
    }
  }

  componentDidMount () {
    let timeout = 60000;
    switch (this.props.location.pathname) {
      case '/mcu/reboot':
        this.props.rebootMcu();
        break;
      case '/mcu/shutdown':
        this.props.shutdownMcu();
        break;
      default:
        break;
    }

    this.timeoutHandler = setTimeout(() => {
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
    rebootMcu: () => {
      dispatch(rebootMcu())
    },
    shutdownMcu: () => {
      dispatch(shutdownMcu())
    },
    redirect: () => {
      dispatch(push('/'))
    }
  }
}

export default connect(null, mapDispatchToProps)(McuManage);
