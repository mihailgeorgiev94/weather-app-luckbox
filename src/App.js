import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store'

// TODO: put this in index.js
import { Widget } from './components/Widget'
import { WeatherDetails } from './components/WeatherDetails'
import { FutureWeather } from './components/FutureWeather'

export const App = () => {
  return (
    <Provider store={store}>
      <Widget/>
      <WeatherDetails/>
      <FutureWeather/>
    </Provider>
  );
}
