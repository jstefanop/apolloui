import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Col sm={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
            <Jumbotron className={ this.props.bg }>
              <h1 className="display-2 text-center"><i className={'fa text-muted ' + this.props.icon}></i></h1>
              { (this.props.title) ?
                  <p className={ (this.props.centerTitle) ? 'lead text-center' : 'lead' }>{ this.props.title }</p>
                : null }
              { (this.props.error && !this.props.log) ?
                  <div>
                    <p className="lead text-center">
                      <code>{ this.props.error }</code>
                    </p>
                    <hr className="my-4" />
                  </div>
                : null }
              { (this.props.error && this.props.log) ?
                  <div>
                    <p className="lead">
                      {this.props.log.split("|").map((i,key) => {
                          return <div key={key}><code>{i}</code></div>;
                      })}
                    </p>
                    <hr className="my-4" />
                  </div>
                : null }
              { (this.props.subtitle) ?
                  <div>
                    <p className={ (this.props.centerSubtitle) ? 'text-muted text-center' : 'text-muted' }>{ this.props.subtitle }</p>
                  </div>
                : null }
              { (this.props.showBtn) ?
                  <div>
                    <p className={ (this.props.centerTitle) ? 'lead text-center' : 'lead' }>
                      <Link to={ this.props.btnTo } className="btn btn-md btn-primary text-white">{ this.props.btnText }</Link>
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
