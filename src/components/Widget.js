import React, { useState } from 'react';
import sunIcon from './sunIcon.png';
import rainIcon from './rainIcon.png';

// in reality this will be in .env
const API_KEY = "a54421e62f46d61e1548556da2fd73e8"
const WEATHER_TYPES = {
  SUNNY: 'sunny',
  CLOUDY: 'cloudy'
}

export const Widget = () => {
  const [city, setCity] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const [temp, setTemp] = useState(null);

  return (
    <div className="widget">

      <div className="city-wrapper">
        <input className="city" type="text" onKeyUp={setCity}/>
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
        <span>C</span>
      </div>

      <span>{weatherType}</span>

      <span>More details ></span>

    </div>
  );
}
