import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentWeather, fetchFutureWeather, setWeatherUnits } from '../actions/weatherActions';
import { WEATHER_UNITS, WEATHER_TYPES } from '../consts';

import './widget.less';

import locationIcon from '../assets/locationIcon.png';
import sunIcon from '../assets/sunIcon.png';
import glassIcon from '../assets/glassIcon.png';
import rainIcon from '../assets/rainIcon.png';

export const Widget = ({ detailsRef }) => {
  const [locationStr, setLocationStr] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const { weatherUnits } = useSelector(state => state.weather);
  const { city } = useSelector(state => state.weather);
  const { temp } = useSelector(state => state.weather);
  const { weatherType } = useSelector(state => state.weather);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather(locationStr));
    dispatch(fetchFutureWeather(locationStr));
  }, [locationStr, dispatch]);

  useEffect(() => {
    setCurrentCity(city);
  }, [city])

  const handleWeatherUnitsClick = useCallback(() => {
    weatherUnits === WEATHER_UNITS.METRIC
      ? dispatch(setWeatherUnits(WEATHER_UNITS.IMPERIAL))
      : dispatch(setWeatherUnits(WEATHER_UNITS.METRIC));
  }, [dispatch, weatherUnits]);


  const handleCurrentLocationClick = useCallback((pos) => {
    setLocationStr(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
  }, []);

  return (
    <div className="widget">

      <div className="city">
        <img
          onClick={() => navigator.geolocation.getCurrentPosition(handleCurrentLocationClick)}
          className="city__location"
          src={locationIcon}
          alt='Cannot load asset'
        />
        <input
          ref={inputRef}
          className="city__input"
          type="text"
          value={currentCity || ''}
          onChange={(e) => {
            setCurrentCity(e.target.value)
            setLocationStr(`q=${e.target.value}`);
          }}
        />
        <img
          onClick={() => inputRef.current.focus()}
          className="city__glass"
          src={glassIcon}
          alt='Cannot load asset'
        />
      </div>

      <div className="temp">
        <div className="temp__weather">
          <span className="temp__val">{`${temp || ''}°`}</span>
          <img
            className="temp__icon"
            src={Object.values(WEATHER_TYPES).includes(weatherType) ? sunIcon : rainIcon}
            alt='Cannot load asset'
          />
        </div>
        <span className="temp__units" onClick={handleWeatherUnitsClick}>
          {weatherUnits === WEATHER_UNITS.METRIC ? 'C' : 'F'}
        </span>
      </div>

      <span className="weather-type">{weatherType}</span>

      <span
        onClick={() => window.scrollTo({left: 0, top: detailsRef.current.offsetTop, behavior: 'smooth'})}
        className="details"
      >
    More details >
      </span>

    </div>
  );
};
