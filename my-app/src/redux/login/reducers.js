import { actions } from './actions';

const initialState = {
  user: '',
  password: '',
  sesion: '',
  header: '',
  logged: false
};

function LogInReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN: {
      const newState = {
        user: action.payload.user,
        password: action.payload.password,
        sesion: '',
        header: '',
        logged: true
      };
      return newState;
    }
    default:
      return state;
  }
}

export default LogInReducer;
