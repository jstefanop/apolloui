import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Card,
  CardBody,
  Progress
} from 'reactstrap';

class DashboardWidget extends Component {
  constructor (props) {
    super(props);
    this.state = {
      widgetClasses: 'd-inline-block text-muted text-truncate'
    }
  }

  updateDimensions = () => {
    const widgets = ReactDOM.findDOMNode(this).getElementsByClassName('widget');
    const smallWidth = (widgets[0] && widgets[0].offsetWidth && widgets[0].offsetWidth <= 280) || false;
    let widgetClasses = this.state.widgetClasses;

    if (smallWidth) widgetClasses += ' small-width'
    else widgetClasses = 'd-inline-block text-muted text-truncate';

    this.setState({ widgetClasses: widgetClasses });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { hideProgress } = this.props;

    return (
      <Card className={this.props.bgColor}>
        <CardBody className="widget">
          <div className="h1 text-muted float-right"><i className={this.props.icon + ' text-gray'}></i></div>
          <div className="h4 m-0">{this.props.value}</div>
          <div>{this.props.title}</div>
          <Progress className={`progress-xs my-3 ${hideProgress ? 'invisible' : ''}`} color={this.props.progressColor} value={this.props.progressValue} />
          <small className={this.state.widgetClasses}>{this.props.secondaryTitle}: <b>{this.props.secondaryValue}</b></small>
        </CardBody>
      </Card>
    );
  }
}

export default DashboardWidget;
