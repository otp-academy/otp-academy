import React, { Component, PropTypes } from 'react';
import OTPLogo from '../../Lib/OTPLogo';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import './index.css';

export default class AuthPage extends Component {

  render() {
    return (
      <div className="container">
        <OTPLogo />
        <LoginForm />
        <SignUpForm />
      </div>
    );
  }
}