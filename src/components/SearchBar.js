import React, { Component } from "react";

class SearchBar extends Component {
  state = { query: "" };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.query);
  };

  render() {
    return (
      <form action="" className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Search:</label>
          <input
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}
export default SearchBar;
