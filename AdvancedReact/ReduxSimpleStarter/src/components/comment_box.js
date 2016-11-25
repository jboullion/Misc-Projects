import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = {comment : ''}
  }

  handleChange(event){
    this.setState({comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.saveComment( this.state.comment );

    this.setState({comment:''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h3>Add a Comment</h3>
        <textarea
          value={this.state.comment}
          className="form-control"
          onChange={this.handleChange.bind(this)} />
        <div>
        <button action="submit" className="btn btn-default">Submit</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state){
  return {
    comments: state.comments
  };
}


export default connect(null, actions)(CommentBox);
