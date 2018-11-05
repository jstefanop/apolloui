import React, { Component } from 'react';

import {
  Progress,
  Jumbotron,
  Col,
  Row
} from 'reactstrap';

class LoadingErrorBox extends Component {

  render() {
    if (this.props.show ) {
      return (
        <Row className="animated fadeIn">
          <Col sm={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }} lg={{ size: 4, offset: 4 }}>
            <Jumbotron className={ this.props.bg }>
              <h1 className="display-2 text-center"><i className={'fa text-muted ' + this.props.icon}></i></h1>
              { (this.props.title) ?
                  <p className={ (this.props.centerTitle) ? 'lead text-center' : 'lead' }>{ this.props.title }</p>
                : null }
              { (this.props.subtitle) ?
                  <div>
                    <p className="text-muted">{ this.props.subtitle }</p>
                  </div>
                : null }
              { (this.props.showBtn) ?
                  <div>
                    <hr className="my-4" />
                    <p className="lead">
                      <a className="btn btn-primary btn-md text-white" role="button">Learn more</a>
                    </p>
                  </div>
                : null }
              { (this.props.showProgress) ?
                  <Progress className="progress-xs my-3" color="secondary" value={ this.props.progress } />
                : null }
            </Jumbotron>
          </Col>
        </Row>
      )
    } else {
      return null
    }
  }
}

export default LoadingErrorBox;
