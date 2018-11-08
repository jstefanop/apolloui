import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ModalsSetup from '../Modals/ModalsSetup';
import logo from '../../assets/img/brand/logo.png'

import { Loading } from '../Loading';
import { login } from '../../actions/auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.onChange = this.onChange.bind(this)
  }


  handleLogin (event) {
    const {
      password,
    } = this.state

    this.props.login({ password })

    event.preventDefault();
  }

  onChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {
      password
    } = this.state

    const { error, loading } = this.props

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleLogin}>
                      <h1>Lockscreen</h1>
                      <p className="text-muted">Sign In to unlock the dashboard</p>
                      { (!error && loading) ?
                        <Loading />
                        :
                        <div>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={password} onChange={this.onChange} />
                          </InputGroup>
                          { (error) && <Alert color="danger">{error}</Alert> }
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4" onClick={this.handleLogin}>Login</Button>
                            </Col>
                          </Row>
                        </div>
                      }
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-light py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <img src={logo} alt="Logo" style={{ width: '220px' }} />
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

        <ModalsSetup></ModalsSetup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.auth.status !== 'done',
  loading: state.auth.loading,
  error: state.auth.message,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: ({ password }) => {
      dispatch(login({ password }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
