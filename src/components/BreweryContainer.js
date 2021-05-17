import React, { Component } from "react";
import { connect } from "react-redux";

import BreweryDetails from "./BreweryDetails";
import BreweryList from "./BreweryList";
import { fetchSavedBreweries, selectedBrewery } from "../redux/actions/";

class BreweryContainer extends Component {
  componentDidMount() {
    this.props.fetchSavedBreweries();
  }

  // handleClick = (e) => {
  //   e.preventDefault();
  //   const brewery = this.props.breweries.filter((brewery) => {
  //     brewery.name === e.target.innerText;
  //   });
  //   selectedBrewery: brewery;
  // };

  render() {
    return (
      <div className="ui row">
        <div className="column six wide">
          <div className="ui divided list">
            <h1 className='ui header'>Brewery List</h1>
            {this.props.breweries.map((brewery) => {
              return (
                <div className="item" key={brewery.id}>
                  <div
                    className="content"
                    onClick={(e) => {
                      this.props.selectedBrewery(brewery)                      
                    }}
                  >
                    <p className="ui header">{brewery.name}</p>
                  </div>
                </div>
              );
            })}
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
