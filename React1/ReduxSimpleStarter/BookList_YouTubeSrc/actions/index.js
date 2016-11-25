
export function selectBook(book){
  //this is an actionCreator and it needs to return an action
  //action: an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
