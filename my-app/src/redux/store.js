import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import gameReducer from './game/reducers';
import loginReducer from './login/reducers';

const reducers = {
  gameReducer,
  form: formReducer,
  loginReducer
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
