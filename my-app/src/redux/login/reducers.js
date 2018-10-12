import { actions } from './actions';

const initialState = {
  Authorization: '',
  logged: false
};

function LogInReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN: {
      return {
        Authorization: action.payload.Authorization,
        logged: true
      };
    }
    default:
      return state;
  }
}

export default LogInReducer;
