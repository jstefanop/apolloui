import { connect } from 'react-redux';
import React, { Component } from 'react';
import classNames from 'classnames';

import { clearAlert } from '../../actions/alert';

class ErrorAlert extends Component {


  render() {
    const {
      show,
      type,
      message,
      closeAlert,
    } = this.props;

    let classesArray = [
      'fixed-top',
      'alert',
      'alert-dismissible',
      'fade',
      'show',
      { 'alert-danger': type === 'error' },
      { 'alert-success': type === 'success' },
    ];
    let alertClasses = classNames(classesArray);

    // Auto close alert
    setTimeout(() => {
      this.props.closeAlert();
    }, 5000);

    return (
      show && (
      <div className={alertClasses} role="alert">
        <strong>{ message }</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={closeAlert}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  message: (state.alert && state.alert.message) || 'Internal error',
  show: state.alert != null,
  type: state.alert && state.alert.type,
});

const mapDispatchToProps = dispatch => ({
  closeAlert: () => {
    dispatch(clearAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
