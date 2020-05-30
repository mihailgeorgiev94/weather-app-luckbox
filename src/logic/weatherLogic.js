import { createLogic } from 'redux-logic';
import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS } from '../actions/types'

// in reality this will be in .env/backend
const APP_ID = "a54421e62f46d61e1548556da2fd73e8";

export const fetchWeatherLogic = [createLogic({
  type: FETCH_WEATHER,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const { weatherUnits } = getState().weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=${weatherUnits}&appid=${APP_ID}`)
      .then(resp => resp.json())
      .then(payload => dispatch({ type: FETCH_WEATHER_SUCCESS, payload }))
      .catch(err => {
        console.error(err); // log since could be render err
        // clear state
        // dispatch({ type: FETCH_WEATHER_FAILED, payload: err, error: true })
      })
      .then(() => done());
  }
})];
