import React from 'react';
import {  LineChart, Line, XAxis } from 'recharts';
import { useSelector } from 'react-redux';

import { WEATHER_TYPES } from '../consts';

import './weather-details.less';

import windIcon from '../assets/windIcon.png';
import pressureIcon from '../assets/pressureIcon.png';
import sunIcon from '../assets/sunIcon.png';
import rainIcon from '../assets/rainIcon.png';
import humidityIcon from '../assets/humidityIcon.png';

export const WeatherDetails = () => {
  const { clouds } = useSelector(state => state.weather);
  const { humidity } = useSelector(state => state.weather);
  const { pressure } = useSelector(state => state.weather);
  const { wind } = useSelector(state => state.weather);
  const { hourlyWeather } = useSelector(state => state.weather);
  const chartData = hourlyWeather.map(e => ({ pv: e.main.temp }));

  return (
    <div className="weather-details">
      <span>details ∨</span>

      <div className="table">

        <div className="table__row">
          <div className="wind">
            <span className="table__label">{`${wind} m/s`}</span>
            <img
              src={windIcon}
              alt='Cannot load asset'
            />
          </div>
          <div className="clouds">
            <span className="table__label">{`${clouds} %`}</span>
            <img
              src={sunIcon}
              alt='Cannot load asset'
            />
          </div>
        </div>

        <div className="table__row">
          <div className="temp">
            <span className="table__label">{`${pressure} hPa`}</span>
            <img
              src={pressureIcon}
              alt='Cannot load asset'
            />
          </div>
          <div className="humidity">
            <span className="table__label">{`${humidity} %`}</span>
            <img
              src={humidityIcon}
              alt='Cannot load asset'
            />
          </div>
        </div>
      </div>

      <span>24 - hour forecast</span>

      <div className="chart-wrapper">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis tick={<AxisTick data={hourlyWeather}/>} stroke="#FFFFFF" tickSize={0}/>
          <Line type="monotone" dataKey="pv" stroke="#FFFFFF" dot={<LineDot/>} />
        </LineChart>
      </div>

      <span>Next 4 days ∨</span>
    </div>
  );
};

export const LineDot = ({cx, cy, stroke, payload, value}) => {

  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle cx={0} cy={0} r={5} stroke="#FFFFFF" fill="#FFFFFF"/>
      <text className="chart__label" stroke="#FFFFFF" x={-10} y={-16}>{parseInt(value)}</text>
    </g>
)};


export const AxisTick = ({data, x, y, stroke, payload}) => (
  <g transform={`translate(${x},${y})`}>
    <image
      y={-65}
      x={-10}
      href={Object.values(WEATHER_TYPES).includes(data[payload.value].weather[0].main) ? sunIcon : rainIcon}
      alt='Cannot load asset'
    />
    <text className="chart__label" stroke="#FFFFFF" x={-10} y={-16}>{`${data[payload.value].wind.speed} m/s`}</text>
    <text className="chart__label" stroke="#FFFFFF" x={-10} y={16}>{data[payload.value].dt_txt.split(' ')[1].slice(0, 5)}</text>
  </g>
);
