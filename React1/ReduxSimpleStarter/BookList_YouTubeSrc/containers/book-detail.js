import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    //on initialize the reducer_active_book.js is returning a null state because no book has been selected
    if(! this.props.activeBook){
      return <div>Select a book you bitch!</div>;
    }

    return (
      <div>
        <h2>{this.props.activeBook.title}</h2>
        <p>{this.props.activeBook.desc}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
