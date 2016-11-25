import { GET_FORECAST5 } from '../actions/index';

//state argument is NOT APPLICATION state.
//only the state this reducer is responsible for
export default function(state = [], action){

  switch(action.type){
    case GET_FORECAST5:
      //return state.concat([ action.payload.data ]); //puts new state at end of state array
      //return action.payload.data.concat([ state ]); //puts new state at front of state array
      return [ action.payload.data, ...state ]; //idential to the line above. ES6
  }

  return state;
}
