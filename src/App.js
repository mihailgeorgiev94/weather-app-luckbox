import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Weather } from './components';

export const App = () => {
  return (
  <Provider store={store}>
      <Weather/>
  </Provider>
)};
