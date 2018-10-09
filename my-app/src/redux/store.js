import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import reducer from './game/reducers';

const reducers = {
  gameReducer: reducer,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
