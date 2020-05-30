import React from 'react';
import { useSelector } from 'react-redux';

export const FutureWeather = () => {
  const { futureWeather } = useSelector(state => state.weather )

  return (
    <div className="future-weather">
      {futureWeather.map(e => renderCell(e))}
    </div>
  );
}

const renderCell = (weatherData) => (
  <React.Fragment key={weatherData.dt_txt}>
    <span>{weatherData.dt_txt}</span>
    <span>{weatherData.main.temp}</span>
    <span>{weatherData.weather[0].main}</span>
  </React.Fragment>
)
