import React, { Component } from 'react';
import { Panel, Button, Form, FormGroup, Col, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <Panel header="Login">
          <Form horizontal>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Username</Col>
              <Col sm={10}>
                <FormControl
                  name="username"
                  type="text"
                  value={ username }
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>Password</Col>
              <Col sm={10}>
                <FormControl
                  name="password"
                  type="password"
                  value={ password }
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Login
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}