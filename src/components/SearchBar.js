import React, { Component } from 'react'


export default class SearchBar extends Component {
  state = {
    condition: ''
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.condition)
    this.props.onSubmit(this.state.condition);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image-search</label>
          <input type="text" value={this.state.condition} onChange={(event) => {this.setState({ condition: event.target.value })}}/>
        </div>
        </form>
      </div>
    )
  }
}

