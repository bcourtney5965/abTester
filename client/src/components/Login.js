import React, { Component } from 'react';
import LoginForm from './loginForm';

class Login extends Component {
  render() {
    return (
      <div>
        <button>facebookbutton</button>
        <LoginForm />
        <a>Create an Account</a>
        <a>Forgot Password</a>
      </div>
    );
  }
}

export default Login;
