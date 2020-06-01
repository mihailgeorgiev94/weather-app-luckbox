import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Widget, WeatherDetails, FutureWeather } from './';

import sunBackground from '../assets/sunBackground.png';
import rainBackground from '../assets/rainBackground.png';

import './weather.less';

const BACKGROUND_SUN = "#EEB625";
const MAIN_PEACH = "#EEA594";

export const Weather = () => {
  const weatherRef = useRef(null);
  const widgetBackgroundRef = useRef(null);
  const { city } = useSelector(state => state.weather);

  const listenScrollEvent = useCallback(() => {
    if(window.scrollY > (window.innerHeight / 1.3 - 30)) {
      weatherRef.current.style.background = MAIN_PEACH;
      widgetBackgroundRef.current.style.background = MAIN_PEACH;
    } else {
      weatherRef.current.style.background = BACKGROUND_SUN;
      widgetBackgroundRef.current.style.background = BACKGROUND_SUN;
    }
  }, [weatherRef]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    weatherRef.current.style.background = BACKGROUND_SUN
    widgetBackgroundRef.current.style.background = BACKGROUND_SUN
  });

  return (
    <div ref={weatherRef} className="weather">
      <div className="parallax" style={{backgroundImage: `url(${rainBackground})`}}/>
      <div ref={widgetBackgroundRef} className="widget-background"/>
      <div className="widget-wrapper">
        <Widget/>
      </div>
      {city ? (
        <div className="content">
        <WeatherDetails/>
        <FutureWeather/>
      </div>
      ) : null}
    </div>
)};
