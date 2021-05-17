import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAPIBreweries, selectedBrewery } from "../redux/actions/";


class SearchContainer extends Component {
  componentDidMount() {
    this.props.fetchAPIBreweries();
  }

  render() {
    return (
      <div>
        <div className="ui row">
          <div className="column six wide">
            <h1 className="ui header">Search Results</h1>
            {console.log(this.props.breweries)}
          </div>
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
