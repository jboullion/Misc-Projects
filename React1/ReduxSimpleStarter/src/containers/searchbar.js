import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getForcast5 } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //every clas must have a render function
  render() {
    return (
      <div className="search-bar">
        <form
          className="input-group"
          onSubmit={this.onFormSubmit}
          >
          <input
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Example: Madison, WI or Ann Arbor"
          />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }

  onInputChange(event){
    this.setState({term: event.target.value});
    //console.log(this.state.term)
    //this.props.onSearchTermChange(term);
  }

  onFormSubmit(event){
    event.preventDefault();

    var resultsJSON = this.props.getForcast5(this.state.term);

    //reset the input
    this.setState({term: ''});
  }
}

// function mapStateToProps(state){
//   return {
//     term: state.term
//   };
// }

function mapDispatchToProps(dispatch){
  //whenever getForcast5 is called, result passed to all middleware and reducers
  return bindActionCreators({getForcast5}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
