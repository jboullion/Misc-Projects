import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Use describe to group together similar tests
describe('CommentBox', () => {
  let component = null;
  let textarea = null;

  beforeEach(() => {
    component = renderComponent(CommentBox);
    textarea = component.find('textarea');
  });

  it('has ID class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a textarea', () => {
    expect(textarea).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering text', () => {

    beforeEach(() => {
      textarea.simulate('change', 'new comment');
    });

    it('shows text in textarea', () => {
      expect(textarea).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.find('textarea').simulate('submit');
      expect(textarea).to.have.value('');
    });
  });

});
