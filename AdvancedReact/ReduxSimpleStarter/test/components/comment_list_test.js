import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component = null;

  beforeEach(() => {
    const props = { comments: ['First Comment', 'second comment', 'another comment']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('First Comment');
    expect(component).to.contain('second comment');
    expect(component).to.contain('another comment');
  });

});
