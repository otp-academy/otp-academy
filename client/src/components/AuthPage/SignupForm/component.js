import React, { Component } from 'react';
import { Panel, Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      reenterPass: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { username, password, reenterPass } = this.state;
    
    return (
      <div className="signupPanel">
        <Panel header="Sign Up">
          <Form>

            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                name="username"
                type="text"
                value={ username }
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                type="password"
                value={ password }
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Re-enter Password</ControlLabel>
              <FormControl
                name="reenterPass"
                type="password"
                value={ reenterPass }
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit">
                Sign Up
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}