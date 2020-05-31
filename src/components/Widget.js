import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentWeather, fetchFutureWeather, setWeatherUnits } from '../actions/weatherActions';
import { WEATHER_UNITS } from '../consts';

import './widget.less';

import sunIcon from '../assets/sunIcon.png';
import glassIcon from '../assets/glassIcon.png';
import rainIcon from '../assets/rainIcon.png';

// You guys probably meant clear instead of cloudy here
const WEATHER_TYPES = {
  SUNNY: 'Sunny',
  CLEAR: 'Clear'
};

export const Widget = () => {
  const [city, setCity] = useState(null);
  const { weatherUnits } = useSelector(state => state.weather);
  const { temp } = useSelector(state => state.weather);
  const { weatherType } = useSelector(state => state.weather);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentWeather(city));
    dispatch(fetchFutureWeather(city));
  }, [city, dispatch, weatherUnits]);

  const handleWeatherUnits = useCallback(() => {
    weatherUnits === WEATHER_UNITS.METRIC
      ? dispatch(setWeatherUnits(WEATHER_UNITS.IMPERIAL))
      : dispatch(setWeatherUnits(WEATHER_UNITS.METRIC));
  }, [dispatch, weatherUnits]);

  // TODO: Add current location
  return (
    <div className="widget">

      <div className="city">
        <input className="city__input" type="text" onChange={(e) => setCity(e.target.value)}/>
        <img className="city__glass" src={glassIcon} alt='Cannot load asset'/>
      </div>

      <div className="temp">
        <div className="temp__weather">
          <span className="temp__val">{`${temp}°`}</span>
          <img
            className="temp__icon"
            src={Object.values(WEATHER_TYPES).includes(weatherType) ? sunIcon : rainIcon}
            alt='Cannot load asset'
          />
        </div>
        <span className="temp__units" onClick={handleWeatherUnits}>
          {weatherUnits === WEATHER_UNITS.METRIC ? 'C' : 'F'}
        </span>
      </div>

      <span className="weather-type">{weatherType}</span>

      <span className="details">More details ></span>

    </div>
  );
};
