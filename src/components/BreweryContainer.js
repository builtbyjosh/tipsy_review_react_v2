import React, { Component } from "react";
import { connect } from "react-redux";

import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";
import { fetchSavedBreweries, selectedBrewery } from "../redux/actions/";

class BreweryContainer extends Component {
  componentDidMount() {
    this.props.fetchSavedBreweries();
  }

  render() {
    return (
      <div className="ui row">
        <div className="column six wide">
          <div className="ui divided list">
            <h1 className='ui header'>Brewery List</h1>
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

export default connect(mapStateToProps, {
  fetchSavedBreweries,
  selectedBrewery,
})(BreweryContainer);
