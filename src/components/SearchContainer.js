import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAPIBreweries, selectedBrewery } from "../redux/actions/";
import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";
import SearchBar from "./SearchBar";

class SearchContainer extends Component {
  // componentDidMount() {
  //   this.props.onQuerySubmit('holland');
  // }

  onSearchSubmit = (query) => {
    this.props.fetchAPIBreweries(query);
  };

  render() {
    return (
      <>
        <div className="ui row">
          <div className="column six wide">
            <div className="ui divided list">
              <SearchBar onFormSubmit={this.onSearchSubmit} />
              <BreweryList />
            </div>
          </div>
          <div className="column ten wide">
            <BreweryDetails />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBrewery: state.selectedBrewery,
  };
};

export default connect(mapStateToProps, { fetchAPIBreweries, selectedBrewery })(
  SearchContainer
);
