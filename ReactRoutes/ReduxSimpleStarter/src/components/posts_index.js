import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

import Post from '../components/post.js';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        // <Post
        //   key={post.id}
        //   title={post.title}
        //   categories={post.categories}
        //   content={post.content}
        //   />
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/'+post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>

      );
    });
  };

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>


    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  };
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
