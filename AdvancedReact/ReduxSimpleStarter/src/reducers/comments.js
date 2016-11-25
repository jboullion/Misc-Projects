import { SAVE_COMMENT } from '../actions/types';

const INTIAL_STATE = { comments: [] };

export default function(state = [], action){
  switch(action.type){
    case SAVE_COMMENT:

      return [ ...state,  action.payload ];

  }

  return state;
}
