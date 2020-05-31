import React from 'react';
import { useSelector } from 'react-redux';

import { WEATHER_TYPES } from '../consts';

import './future-weather.less';

import sunIcon from '../assets/sunIcon.png';
import rainIcon from '../assets/rainIcon.png';

export const FutureWeather = () => {
  const { futureWeather } = useSelector(state => state.weather);

  return (
    <div className="future-weather">
      <span>date</span>
      <span>temperature</span>
      <span>weather</span>
      {futureWeather.map(e => renderCell(e))}
    </div>
  );
};

// rule of three applies here for deciding weather icon, but we will break it a bit
const renderCell = (weatherData) => (
  <div className="future-weather__row" key={weatherData.dt_txt}>
    <span>{weatherData.dt_txt.split(' ')[0]}</span>
    <span className="future-weather__temp">{`${parseInt(weatherData.main.temp)}°`}</span>
    <div>
      <img
        className="future-weather__icon"
        src={Object.values(WEATHER_TYPES).includes(weatherData.weather[0].main) ? sunIcon : rainIcon}
        alt='Cannot load asset'
      />
    </div>
  </div>
);
