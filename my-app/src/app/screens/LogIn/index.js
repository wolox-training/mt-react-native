import React, { Component } from 'react';
import LogIn from './layout';

class RegisterFromContainer extends Component {
  getInitialValues = () => {
    return {
      mail: 'example@wolox.com.ar',
      password: 'ponele'
    };
  };

  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return <LogIn onSubmit={this.submit} initialValues={this.getInitialValues()} />;
  }
}

export default RegisterFromContainer;
