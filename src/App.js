import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Widget, WeatherDetails, FutureWeather } from './components';

import sunBackground from './assets/sunBackground.png';
import rainBackground from './assets/rainBackground.png';

import './app.less';

export const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="parallax" style={{backgroundImage: `url(${rainBackground})`}}/>
      <div className="widget-background"/>
      <div className="widget-wrapper">
        <Widget/>
      </div>
      <div className="content">
        <WeatherDetails/>
        <FutureWeather/>
      </div>
    </div>
  </Provider>
);
