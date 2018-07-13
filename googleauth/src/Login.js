import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
//import { push } from 'react-router-redux';
//import Stuff from './Stuff';

//TODO: line 14 (this.setState({ConsenSysEmployee : true});) doesnt work!!!!
//setState is not callable in responseGoogle, as it is a constant
//figure out a way to bind this or set state outside of responseGoogle
//Not possible to set state inside component, possible async as setState is async 
//make async function inside component and see if it could be called when compoenentDidMount
//or just see if you can make an async function inside compoennt that will properly do it
//ASYNC FUNTION WES INSIDE COMPONENT

//If called by onSuccess, the response will be login info
//If called by onFailure, the response will be the error and link will ask user to try again
const responseGoogle= (response)=>{
  console.log(response);
  //If gmail account ends in consensys.net, and login success, they are a ConsenSys Employee
  if(response.profileObj.email.split('@')[1] === 'consensys.net'){
    console.log('is true');
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
}
//Initialize state to not ConsenSys employee
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
