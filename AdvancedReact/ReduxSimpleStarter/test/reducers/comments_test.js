import { renderComponent, expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    //expect(commentReducer()).to.be.instanceof(Array); //check that this is of TYPE array
    expect(commentReducer(undefined, {})).to.eql([]); // check that this is an array AND it is empty
  });

  it('handles action SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT,  payload: 'Test Comment' };
    expect(commentReducer([], action)).to.eql(['Test Comment']);
  });
});
