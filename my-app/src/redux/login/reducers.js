import { actions } from './actions';

const initialState = {
  authorization: '',
  logged: false
};

function Login(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN: {
      return {
        authorization: action.payload.authorization,
        logged: true
      };
    }
    default:
      return state;
  }
}

export default Login;
