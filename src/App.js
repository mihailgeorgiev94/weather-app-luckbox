import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Widget, WeatherDetails, FutureWeather } from './components';

import './app.less';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Widget/>
        <WeatherDetails/>
        <FutureWeather/>
      </div>
    </Provider>
  );
};
