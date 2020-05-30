import { FETCH_CURRENT_WEATHER, FETCH_FUTURE_WEATHER, SET_WEATHER_UNITS } from './types'

export const fetchCurrentWeather = (city) => ({
  type: FETCH_CURRENT_WEATHER,
  payload: city
})

export const fetchFutureWeather = (city) => ({
  type: FETCH_FUTURE_WEATHER,
  payload: city
})

export const setWeatherUnits = (unit) => ({
  type: SET_WEATHER_UNITS,
  payload: unit
})
