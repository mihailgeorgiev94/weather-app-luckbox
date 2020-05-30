import React from 'react';
import { useSelector } from 'react-redux';

import windIcon from '../assets/windIcon.png';
import pressureIcon from '../assets/pressureIcon.png';
import cloudsIcon from '../assets/sunIcon.png';
import humidityIcon from '../assets/humidityIcon.png';

export const WeatherDetails = () => {
  const { clouds } = useSelector(state => state.weather )
  const { humidity } = useSelector(state => state.weather )
  const { pressure } = useSelector(state => state.weather )
  const { wind } = useSelector(state => state.weather )

  return (
    <div className="weather-details">
      <span>details ▼</span>

      <div className="details-wrapper">
        {/* this should wrap in 2 line on mobile */}
        <div className="wind">
          <span>{wind}</span>
          <img
            src={windIcon}
            alt='Cannot load asset'
          />
        </div>
        <div className="temp">
          <span>{pressure}</span>
          <img
            src={pressureIcon}
            alt='Cannot load asset'
          />
        </div>
        <div className="clouds">
          <span>{clouds}</span>
          <img
            src={cloudsIcon}
            alt='Cannot load asset'
          />
        </div>
        <div className="humidity">
          <span>{humidity}</span>
          <img
            src={humidityIcon}
            alt='Cannot load asset'
          />
        </div>
      </div>

      <span>24 - hour forecast</span>

      <span>curve</span>

      {/* I think it should be 4 days instead of 'next day' */}
      <span>Next 4 days ▼</span>
    </div>
  );
}
