import React, { Component } from 'react';
import { Trans } from '@lingui/macro';

class Loading extends Component {
  render() {
    return <div><i className="fa fa-spinner fa-spin mr-2"></i><Trans>Loading</Trans>...</div>;
  }
}

export default Loading;
