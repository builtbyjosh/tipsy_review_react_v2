import React, { Component } from "react";
import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";

export default class BreweryContainer extends Component {
  render() {
    return (
      <div className="ui row">
        
        <div className="column eight wide">
          <BreweryList />
        </div>
        <div className="column eight wide">
          <BreweryDetails />
        </div>
      </div>
    );
  }
}
