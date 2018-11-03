import { connect } from 'react-redux'
import { React, Component } from 'react';
import { Redirect } from 'react-router'

import { startMiner } from '../../actions/miner'

class MinerStart extends Component {
  componentDidMount () {
    this.props.startMiner()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startMiner: () => {
      dispatch(startMiner())
    }
  }
}

export default connect(null, mapDispatchToProps)(MinerStart);
