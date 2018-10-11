import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import gameReducer from './game/reducers';
import loginReducer from './login/reducers';

const reducers = {
  gameReducer,
  form: formReducer,
  loginReducer
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
