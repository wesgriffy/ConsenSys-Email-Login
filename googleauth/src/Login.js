import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
//import { push } from 'react-router-redux';
//import Stuff from './Stuff';

const responseGoogle = (response) =>{
  console.log(response);
  console.log(response.profileObj.email.split('@')[1]);
}

class Login extends Component {
  render() {
    return (
      <GoogleLogin
    clientId="973501436556-sn4e93j7h6mo0ab0ameka7k5dfabreg8.apps.googleusercontent.com"
    buttonText="Login with Consensys email"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
    );
    
  }
}

export default Login;
