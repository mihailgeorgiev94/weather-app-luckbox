import React, { useState, useEffect, useCallback } from 'react';
import sunIcon from './sunIcon.png';
import rainIcon from './rainIcon.png';

// in reality this will be in .env
const APP_ID = "a54421e62f46d61e1548556da2fd73e8"

// You guys probably meant clear instead of cloudy here
const WEATHER_TYPES = {
  SUNNY: 'Sunny',
  CLEAR: 'Clear'
}

const WEATHER_UNITS = {
  METRIC: 'metric',
  IMPERIAL: 'imperial'
}

export const Widget = () => {
  const [city, setCity] = useState('plovdiv');
  const [weatherType, setWeatherType] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weatherUnits, setWeatherUnits] = useState(WEATHER_UNITS.METRIC);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${weatherUnits}&appid=${APP_ID}`);
      const data = await response.json();
      setWeatherType(data.weather[0].main);
      setTemp(data.main.temp);
    }

    fetchData();
  }, [city, weatherUnits])

  const handleWeatherUnits = useCallback(() => {
    weatherUnits === WEATHER_UNITS.METRIC
      ? setWeatherUnits(WEATHER_UNITS.IMPERIAL) : setWeatherUnits(WEATHER_UNITS.METRIC)
  }, [weatherUnits])

  return (
    <div className="widget">

      <div className="city-wrapper">
        <input className="city" type="text" onChange={setCity}/>
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
