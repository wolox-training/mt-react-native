import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { store } from './redux/store';
import Routes from './Routes/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
