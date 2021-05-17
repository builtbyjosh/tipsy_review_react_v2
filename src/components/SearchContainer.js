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
    this.props.fetchAPIBreweries(query)
  }

  render() {
    return (
      <>
        <div className="ui row">
          <div className="column twelve wide">
            <SearchBar onFormSubmit={this.onSearchSubmit}/>
          </div>
          
        </div>
        
        <div className="ui row">          
          <div className="column six wide">
            <div className="ui divided list">
              <h1 className="ui header">Search Results</h1>
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
    breweries: state.breweries,
    selectedBrewery: state.selectedBrewery,
  };
};

export default connect(mapStateToProps, { fetchAPIBreweries, selectedBrewery })(
  SearchContainer
);
