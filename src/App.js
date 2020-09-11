import React, { memo } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import LxbMain from './pages/main'

const App = memo(() => {
  return (
    <Provider store={store}>
      <LxbMain/>
    </Provider>
  );
});

export default App;
