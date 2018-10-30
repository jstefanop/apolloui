import { connect } from 'react-redux'
import React, { Component } from 'react';

import { clearError } from '../../actions/error'

class ErrorAlert extends Component {
  render() {
    const {
      show,
      message,
      clearError
    } = this.props
    return (
      show && <div className="fixed-top alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{ message }</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={clearError}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: (state.error && state.error.message) || 'Internal error',
  show: state.error != null
})

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => {
      dispatch(clearError())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
