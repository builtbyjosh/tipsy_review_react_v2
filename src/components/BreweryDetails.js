import React from "react";
import BreweryReviews from "./BreweryReviews";
import { connect } from "react-redux";

const BreweryDetails = ({ brewery }) => {
  if (!brewery) {
    return (
      <div>
        <h1>Select A Brewery</h1>
      </div>
    );
  }
  return (
    <div>
      
      <h1>{brewery.name}</h1>
      <h1>{brewery.city}</h1>

      <BreweryReviews brewery={brewery}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { brewery: state.selectedBrewery };
};

export default connect(mapStateToProps)(BreweryDetails);
