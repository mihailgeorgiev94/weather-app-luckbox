import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Widget, WeatherDetails, FutureWeather } from './';
import { WEATHER_TYPES } from '../consts';

import sunBackground from '../assets/sunBackground.png';
import rainBackground from '../assets/rainBackground.png';

import './weather.less';

const BACKGROUND_SUN = "#EEB625";
const BACKGROUND_RAIN = "#61A9A6";
const MAIN_PEACH = "#EEA594";

export const Weather = () => {
  const weatherRef = useRef(null);
  const widgetBackgroundRef = useRef(null);
  const { city, weatherType } = useSelector(state => state.weather);

  const isSunny = Object.values(WEATHER_TYPES).includes(weatherType)

  const listenScrollEvent = useCallback(() => {
    let color = '';
    if(window.scrollY > (window.innerHeight / 1.3 - 30)) {
      color = MAIN_PEACH;
    } else {
      color = isSunny ? BACKGROUND_SUN : BACKGROUND_RAIN
    }

    weatherRef.current.style.background = color;
    widgetBackgroundRef.current.style.background = color;
  }, [weatherRef, isSunny]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    weatherRef.current.style.background = BACKGROUND_SUN
    widgetBackgroundRef.current.style.background = BACKGROUND_SUN
  });

  return (
    <div ref={weatherRef} className="weather">
      <div
        className="parallax"
        style={{ backgroundImage: `url(${isSunny ? sunBackground : rainBackground})` }}
      />
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
