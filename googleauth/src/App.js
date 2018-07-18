import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class App extends Component {
  state = {
    email: '',
    name: ''
  }
  //If called by onSuccess, the response will be login info
  //If called by onFailure, the response will be the error and popup will ask user to try again
  responseGoogle= (response)=>{
    console.log(response);
    //Save email address to identify user
    this.setState({email : response.profileObj.email});
    this.setState({name : response.w3.ig})
    console.log(this.state.email);
    console.log(this.state.name);
  }
    //clientId is set to localhost:3000
    //This will change if we use hairthereum or different address
    render() {
      return (
        <GoogleLogin
      clientId="973501436556-sn4e93j7h6mo0ab0ameka7k5dfabreg8.apps.googleusercontent.com"
      buttonText="Login with Consensys email"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
    />
      );
    }
}

export default App;