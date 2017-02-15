import React, { Component } from 'react';
import { Panel, Button, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      reenterPass: '',
      reenterDirty: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSignUpForm = this.submitSignUpForm.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'reenterPass' && !this.state.reenterDirty) {
      this.setState({
        reenterDirty: true
      });
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitSignUpForm(e) {
    const { username, password, reenterPass } = this.state;
    const { requestSignUp } = this.props;
    
    e.preventDefault();

    requestSignUp({
      username,
      password,
      reenterPass
    });
  }

  checkValidationState() {
    const { username, password, reenterPass, reenterDirty } = this.state;

    if (reenterDirty) {
      if (password === reenterPass) {
        return 'success';
      }
      return 'error';
    }
    return null;
  }

  checkFormIsValid() {
    const { username, password, reenterPass, reenterDirty } = this.state;
    return username && password === reenterPass && reenterDirty;
  }

  render() {
    const { username, password, reenterPass, reenterDirty } = this.state;

    return (
      <div className="signupPanel">
        <Panel header="Sign Up">
          <Form onSubmit={this.submitSignUpForm}>

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

            <FormGroup validationState={ this.checkValidationState() }>
              <ControlLabel>Re-enter Password</ControlLabel>
              <FormControl
                name="reenterPass"
                type="password"
                value={ reenterPass }
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" disabled={ !this.checkFormIsValid() }>
                Sign Up
              </Button>
            </FormGroup>

          </Form>
        </Panel>
      </div>
    );
  }
}