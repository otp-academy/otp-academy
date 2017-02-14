import React, { Component, PropTypes } from 'react';
import OTPLogo from '../OTPLogo';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import GuestBox from './GuestBox';

export default class AuthPage extends Component {

  render() {
    return (
      <div>
        <OTPLogo />
        <LoginForm />
        <SignUpForm />
        <GuestBox />
      </div>
    );
  }
}