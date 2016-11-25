import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

import Post from '../components/post.js';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }


  //bound to the form onSubmit via handleSubmit
  onDeleteClick(props) {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        //blog post deleted. Navigate to another page
        //use this.context.router.push to navigate
        this.context.router.push('/');
      });
  }

  render(){
    const { post } = this.props;

    const linkElem = <Link to="/" className="btn btn-primary">
                        Home
                      </Link>;

    if(! post){
      return (
        <div>
          {linkElem}
          Loading, please wait.
        </div>
      );
    }

    return (
      <div>
        {linkElem}
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)} >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );

  }//end render

}//end PostsShow

function mapStateToProps(state){
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
