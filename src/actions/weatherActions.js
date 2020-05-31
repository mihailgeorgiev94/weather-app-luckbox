import { FETCH_CURRENT_WEATHER, FETCH_FUTURE_WEATHER, SET_WEATHER_UNITS } from './types';

export const fetchCurrentWeather = (locationStr) => ({
  type: FETCH_CURRENT_WEATHER,
  payload: locationStr
});

export const fetchFutureWeather = (locationStr) => ({
  type: FETCH_FUTURE_WEATHER,
  payload: locationStr
});

export const setWeatherUnits = (unit) => ({
  type: SET_WEATHER_UNITS,
  payload: unit
});
