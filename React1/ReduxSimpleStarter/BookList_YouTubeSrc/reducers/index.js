import { combineReducers } from 'redux';

/* Components */
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

//THESE REDUCERS WILL BE ATTACHED TO THE GLOBAL STATE
//state.books, state.activeBook, etc
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
