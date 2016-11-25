import { combineReducers } from 'redux';
import postReducer from './reducer_posts';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts: postReducer,
  form: formReducer
});

export default rootReducer;
