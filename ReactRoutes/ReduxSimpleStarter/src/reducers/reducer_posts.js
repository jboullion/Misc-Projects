import { FETCH_POST } from '../actions/index';
import { FETCH_POSTS } from '../actions/index';
import { CREATE_POST } from '../actions/index';

const INTIAL_STATE = { all: [], post: null };

export default function(state = INTIAL_STATE, action){
  switch(action.type){
    case FETCH_POST:
      //attaches to state.posts.all
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      //attaches to state.posts.all
      return { ...state, all: action.payload.data };
    case CREATE_POST:
      return { post: action.payload.data };
    default:
      return state;
  }
}
