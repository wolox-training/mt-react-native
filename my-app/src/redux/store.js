import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import gameReducer from './game/reducers';
import loginReducer from './login/reducers';

const reducers = {
  gameReducer,
  form: formReducer,
  loginReducer
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
