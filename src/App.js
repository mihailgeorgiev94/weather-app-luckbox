import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store'
import { Widget } from './components/Widget'
import { WeatherDetails } from './components/WeatherDetails'

export const App = () => {
  return (
    <Provider store={store}>
      <Widget/>
      <WeatherDetails/>
    </Provider>
  );
}
