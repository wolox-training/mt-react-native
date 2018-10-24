import { actions } from './actions';

const initialState = {
  authorization: ''
};

function Login(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN: {
      return {
        authorization: action.payload.authorization
      };
    }
    default:
      return state;
  }
}

export default Login;
