import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  //bound to the form onSubmit via handleSubmit
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //blog post created. Navigate to another page
        //use this.context.router.push to navigate
        this.context.router.push('/');
      });
  }

  render(){
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (

      <div>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Give me your info fool!</h3>

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" describedby="helpBlock" className="form-control" {...title} />
            <div id="helpBlock" className="help-block">
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="help-block">
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control" {...content} />
            <div className="help-block">
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values){
    const errors = {};

    if( ! values.title){
      errors.title = 'Enter a username!';
    }
    if( ! values.categories){
      errors.categories = 'Enter a category!';
    }
    if( ! values.content){
      errors.content = 'Enter some content!';
    }

    return errors;
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default reduxForm({
  form: 'MyForm',
  fields: ['title', 'categories', 'content'],
  validate //validate() function created above
}, null, { createPost })(PostsNew);
