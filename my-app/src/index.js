import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './app/screens/Game';
import RegisterFromContainer from './app/screens/LogIn';
import './index.css';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <RegisterFromContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
