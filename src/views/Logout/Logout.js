import { connect } from 'react-redux'
import { Component } from 'react';

import { logout } from '../../actions/auth'

class Logout extends Component {
  componentDidMount () {
    this.props.logout()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout);
