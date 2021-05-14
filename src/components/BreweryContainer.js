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
        <div className="column eight wide">
          <div className="ui divided list">
            <BreweryList breweries={this.props.breweries} />
            
          </div>
        </div>
        <div className="column eight wide">
          <BreweryDetails brewery={this.props.selectedBrewery}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries,
    selectedBrewery: state.brewery
  };
};

export default connect(mapStateToProps, { fetchSavedBreweries, selectedBrewery })(
  BreweryContainer
);
