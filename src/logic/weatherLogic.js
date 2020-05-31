import { createLogic } from 'redux-logic';
import {
  FETCH_CURRENT_WEATHER,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_FUTURE_WEATHER,
  FETCH_FUTURE_WEATHER_SUCCESS
} from '../actions/types'

// in reality this will be in .env/backend
const APP_ID = "a54421e62f46d61e1548556da2fd73e8";

// this lib looks a lot like redux-sagas no?
export const fetchCurrentWeatherLogic = createLogic({
  type: FETCH_CURRENT_WEATHER,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const { weatherUnits } = getState().weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?${action.payload}&units=${weatherUnits}&appid=${APP_ID}`)
      .then(resp => {
        if(resp.status === 200) return resp.json()

        throw Error(resp.status)
      })
      .then(weatherData => dispatch({ type: FETCH_CURRENT_WEATHER_SUCCESS, payload: weatherData }))
      .catch(err => {
        console.error(err);
        // log to some service here like sentry and have more complex behavior
      })
      .then(() => done());
  }
});

// maybe put data logic here instead of reducer?
export const fetchFutureWeatherLogic = createLogic({
  type: FETCH_FUTURE_WEATHER,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const { weatherUnits } = getState().weather
    fetch(`https://api.openweathermap.org/data/2.5/forecast?${action.payload}&units=${weatherUnits}&appid=${APP_ID}`)
      .then(resp => {
        if(resp.status === 200) return resp.json()

        throw Error(resp.status)
      })
      .then(weatherData => dispatch({ type: FETCH_FUTURE_WEATHER_SUCCESS, payload: weatherData }))
      .catch(err => {
        console.error(err); // log since could be render err
      })
      .then(() => done());
  }
});

export const fetchWeatherLogic = [fetchCurrentWeatherLogic, fetchFutureWeatherLogic]
