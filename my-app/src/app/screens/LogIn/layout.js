import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label> E-Mail </label>
          <Field name="mail" component="input" type="text" />
        </div>
        <div>
          <label> password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

Login = reduxForm({ form: 'login' })(Login);

export default Login;
