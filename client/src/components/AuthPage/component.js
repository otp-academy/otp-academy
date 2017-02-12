import React, { Component, PropTypes } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class AuthPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <SignUpForm />
        <div>
          {
            // Link: Let me try it as a guest ( your data will still be saved until you clear your history)
          }
        </div>
      </div>
    );
  }
}