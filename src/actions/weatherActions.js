import { FETCH_WEATHER, SET_WEATHER_UNITS } from './types'

export const fetchWeather = (city) => ({
  type: FETCH_WEATHER,
  payload: city
})

export const setWeatherUnits = (unit) => ({
  type: SET_WEATHER_UNITS,
  payload: unit
})
