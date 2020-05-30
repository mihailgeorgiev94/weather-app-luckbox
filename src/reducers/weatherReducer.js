import { FETCH_WEATHER_SUCCESS, SET_WEATHER_UNITS } from '../actions/types'
import { WEATHER_UNITS } from '../consts';

const initialState = {
  weatherType: null,
  temp: null,
  city: null,
  weatherUnits: WEATHER_UNITS.METRIC
}

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCH_WEATHER_SUCCESS:
    return {
      ...state,
      weatherType: action.payload.weather[0].main,
      temp: action.payload.main.temp
    };
  case SET_WEATHER_UNITS:
    return {
      ...state,
      weatherUnits: action.payload
    }
  default:
    return state;
  }
}
