import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  onSubmit = (event) => {
      event.preventDefault();
      this.props.onSearchSubmit(this.state.searchText);
  }
  render() {
    return (
      <div className="search-bar ui segment" >  
        <form onSubmit={this.onSubmit} className = "ui form">
          <label>Video Search (Hit Enter)</label>
          <input 
            onChange={this.onInputChange}
            type="text"
            value={this.state.searchText}
          />
          </form>
        
      </div>
    );
  }
}
