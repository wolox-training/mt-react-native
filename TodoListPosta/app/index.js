import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import TodoApp from './Routes/RouteNavigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
