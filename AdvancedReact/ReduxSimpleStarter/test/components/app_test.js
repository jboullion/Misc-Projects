import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests
describe('App', () => {
  let component = null;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of a target
  it('has a CommentBox', () => {

    expect(component.find('.comment-box')).to.exist;
  });

  it('has a CommentList', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
