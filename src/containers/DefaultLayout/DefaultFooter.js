import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>ApolloUI &copy; {(new Date().getFullYear())} <a href="https://futurebit.io" rel="noopener noreferrer" target="_blank">Futurebit</a></span>
        <span className="ml-auto">Powered by <a href="https://getminera.com" rel="noopener noreferrer" target="_blank">Minera</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
