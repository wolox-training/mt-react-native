import React, { Component } from 'react';
import LogIn from './layout';

class RegisterFromContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };
  render() {
    return <LogIn onSubmit={this.submit} />;
  }
}

export default RegisterFromContainer;
