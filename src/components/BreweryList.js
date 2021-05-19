import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedBrewery, breweryReviews } from "../redux/actions/";

class BreweryList extends Component {
  render() {
    return (
      <>
        <h2>Search Results: {this.props.breweries.length}</h2>
        {this.props.breweries.map((brewery) => {
          return (
            <div className="item" key={brewery.id}>
              <div
                className="content"
                onClick={(e) => {
                  this.props.selectedBrewery(brewery);
                  this.props.breweryReviews(brewery.reviews);
                }}
              >
                <p className="ui header">{brewery.name}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries };
};

export default connect(mapStateToProps, { selectedBrewery, breweryReviews })(
  BreweryList
);
