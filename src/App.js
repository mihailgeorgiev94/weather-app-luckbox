import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store'
import { Widget } from './components/Widget'

export const App = () => {
  return (
    <Provider store={store}>
      <Widget/>
    </Provider>
  );
}
