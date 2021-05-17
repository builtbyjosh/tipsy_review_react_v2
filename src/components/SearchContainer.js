import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAPIBreweries, selectedBrewery } from "../redux/actions/";
import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";

class SearchContainer extends Component {
  componentDidMount() {
    this.props.fetchAPIBreweries();
  }

  render() {
    return (

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
