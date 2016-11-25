import { combineReducers } from 'redux';

/* Components */
import ForecastReducer from './reducer_forcast';
//import GoogleMapReducer from './reducer_google_map';

//THESE REDUCERS WILL BE ATTACHED TO THE GLOBAL STATE
const rootReducer = combineReducers({
  forcast: ForecastReducer, //used in weather-list.js
  //location: GoogleMapReducer // used in weath-list.js
});

export default rootReducer;
