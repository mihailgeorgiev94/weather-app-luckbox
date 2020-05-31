import { FETCH_CURRENT_WEATHER_SUCCESS, FETCH_FUTURE_WEATHER_SUCCESS, SET_WEATHER_UNITS } from '../actions/types'
import { WEATHER_UNITS } from '../consts';

const initialState = {
  weatherType: null,
  temp: null,
  city: null,
  wind: null,
  pressure: null,
  clouds: null,
  humidity: null,
  weatherUnits: WEATHER_UNITS.METRIC,
  hourlyWeather: [],
  futureWeather: []
}

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCH_CURRENT_WEATHER_SUCCESS:
    return {
      ...state,
      weatherType: action.payload.weather[0].main,
      temp: parseInt(action.payload.main.temp),
      wind: action.payload.wind.speed,
      pressure: action.payload.main.pressure,
      clouds: action.payload.clouds.all,
      humidity: action.payload.main.humidity,
      city: action.payload.name
    };
  case FETCH_FUTURE_WEATHER_SUCCESS:
    return {
      ...state,
      hourlyWeather: action.payload.list.slice(0, 9),
      futureWeather: action.payload.list.reverse().filter(e => e.dt_txt.endsWith('12:00:00')).slice(0,4).reverse(),
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
