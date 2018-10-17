import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import game from './game/reducers';
import login from './login/reducers';

const reducers = {
  game,
  form: formReducer,
  login
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
