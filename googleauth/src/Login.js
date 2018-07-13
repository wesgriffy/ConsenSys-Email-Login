import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { push } from 'react-router-redux';
import Stuff from './Stuff';

//If called by onSuccess, the response will be login info
//If called by onFailure, the response will be the error and link will ask user to try again
const responseGoogle= (response)=>{
  console.log(response);
  //If gmail account ends in consensys.net, and login success, they are a ConsenSys Employee
  if(response.profileObj.email.split('@')[1] === 'consensys.net'){
    this.state = {
      ConsenSysEmployee: true
    }
  }
  else{
    this.state = {
      ConsenSysEmployee: false
    }
  }
  console.log(this.state.ConsenSysEmployee);
  //TODO: Route to tcr-ui homepage
  if(this.state.ConsenSysEmployee){
    console.log('pushing stuff');
    push(<Stuff/>);
  }
}

class Login extends Component {
  //clientId is set to localhost:3000
  //This will change if we use hairthereum or different address
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
