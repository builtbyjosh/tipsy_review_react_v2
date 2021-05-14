import React, { Component } from "react";
import { connect } from "react-redux";

import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";
import fetchSavedBreweries from "../redux/actions/";

class BreweryContainer extends Component {
  componentDidMount() {
    this.props.fetchSavedBreweries()
  }
  renderlist() {
    return this.props.breweries.map((brewery) => {
      return (
        <BreweryList brewery={brewery}
      );
    });
  }

  render() {
    return (
      <div className="ui row">
        <div className="column eight wide">
          <div className="ui divided list">
            <BreweryList />
          </div>          
        </div>
        <div className="column eight wide">
          <BreweryDetails />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { breweries: state.breweries };
};

export default connect(mapStateToProps, { fetchSavedBreweries })(
  BreweryContainer
);
