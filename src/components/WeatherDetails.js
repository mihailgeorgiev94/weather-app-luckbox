import React from 'react';
import {  LineChart, Line, XAxis } from 'recharts';
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
  const { hourlyWeather } = useSelector(state => state.weather )
  const chartData = hourlyWeather.map(e => ({ name: e.dt_txt, pv: e.main.temp }))

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

      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

      {/* I think it should be 4 days instead of 'next day' */}
      <span>Next 4 days ▼</span>
    </div>
  );
}
