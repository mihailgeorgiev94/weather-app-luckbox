import React, { useEffect, useCallback, useRef } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Widget, WeatherDetails, FutureWeather } from './components';

import sunBackground from './assets/sunBackground.png';
import rainBackground from './assets/rainBackground.png';

import './app.less';

const BACKGROUND_SUN = "#EEB625";
const MAIN_PEACH = "#EEA594";

export const App = () => {
  const appRef = useRef(null);
  const widgetBackgroundRef = useRef(null);

  const listenScrollEvent = useCallback(() => {
    if(window.scrollY > window.innerHeight / 1.3) {
      appRef.current.style.background = MAIN_PEACH;
      widgetBackgroundRef.current.style.background = MAIN_PEACH;
    } else {
      appRef.current.style.background = BACKGROUND_SUN;
      widgetBackgroundRef.current.style.background = BACKGROUND_SUN;
    }
  }, [appRef]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    appRef.current.style.background = BACKGROUND_SUN
    widgetBackgroundRef.current.style.background = BACKGROUND_SUN
  });

  return (
  <Provider store={store}>
    <div ref={appRef} className="app">
      <div className="parallax" style={{backgroundImage: `url(${rainBackground})`}}/>
      <div ref={widgetBackgroundRef} className="widget-background"/>
      <div className="widget-wrapper">
        <Widget/>
      </div>
      <div className="content">
        <WeatherDetails/>
        <FutureWeather/>
      </div>
    </div>
  </Provider>
)};
