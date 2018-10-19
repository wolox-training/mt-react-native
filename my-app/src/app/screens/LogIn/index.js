import { connect } from 'react-redux';

import actionCreator from '../../../redux/login/actions';

import LogIn from './layout';

const mapStateToProps = state => ({
  authorization: state.login.authorization
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: value => {
      dispatch(actionCreator.makeALogInRequest(value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
