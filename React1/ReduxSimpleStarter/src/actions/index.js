import axios from 'axios';

const WEATHER_API_KEY = '904f12ba1720544e715b576c50e83a3f';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const GET_FORECAST5 = 'GET_FORECAST5';
//export const GET_GOOGLE_MAP = 'GOOGLE_MAP';

export function getForcast5(city){
  const url = `${WEATHER_URL}&q=${city},us`;

  //GET THE WEATHER HERE
  const forecast5 = axios.get(url);

  return {
    type: GET_FORECAST5,
    payload: forecast5
  };
}
