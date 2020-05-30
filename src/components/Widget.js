import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentWeather, fetchFutureWeather, setWeatherUnits } from '../actions/weatherActions'
import { WEATHER_UNITS } from '../consts';

import sunIcon from './sunIcon.png';
import rainIcon from './rainIcon.png';

// You guys probably meant clear instead of cloudy here
const WEATHER_TYPES = {
  SUNNY: 'Sunny',
  CLEAR: 'Clear'
};

export const Widget = () => {
  const [city, setCity] = useState(null);
  const { weatherUnits } = useSelector(state => state.weather )
  const { temp } = useSelector(state => state.weather )
  const { weatherType } = useSelector(state => state.weather )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentWeather(city))
    dispatch(fetchFutureWeather(city))
  }, [city, dispatch, weatherUnits])

  const handleWeatherUnits = useCallback(() => {
    weatherUnits === WEATHER_UNITS.METRIC
      ? dispatch(setWeatherUnits(WEATHER_UNITS.IMPERIAL))
      : dispatch(setWeatherUnits(WEATHER_UNITS.METRIC))
  }, [dispatch, weatherUnits])

  return (
    <div className="widget">

      <div className="city-wrapper">
        <input className="city" type="text" onChange={(e) => setCity(e.target.value)}/>
      </div>

      <div className="temp-wrapper">
        <span>{temp}</span>
        <div>
          <span>O</span>
          <img
            src={Object.values(WEATHER_TYPES).includes(weatherType) ? sunIcon : rainIcon}
            alt='Cannot load asset'
          />
        </div>
        <span onClick={handleWeatherUnits}>{weatherUnits === WEATHER_UNITS.METRIC ? 'C' : 'F'}</span>
      </div>

      <span>{weatherType}</span>

      <span>More details ></span>

    </div>
  );
}
