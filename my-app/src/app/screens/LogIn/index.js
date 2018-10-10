import React, { Component } from 'react';
import LogIn from './layout';

class RegisterFromContainer extends Component {
  getInitialValues = () => {
    return {
      mail: '',
      password: ''
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
