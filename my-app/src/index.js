import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './app/screens/Game';
import './index.css';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
