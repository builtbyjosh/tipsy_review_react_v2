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
    <div className="ui">
      <h1 className="ui">Details for:</h1>
      <div className="ui segment">
        <h4 className="ui header">{brewery.name}</h4>
        <p>{brewery.address}</p>
        <p>
          {brewery.city}, {brewery.state}, {brewery.postal_code}
        </p>
        <p>{brewery.phone}</p>
        <p>{brewery.avg_rating}</p>
      </div>

      <BreweryReviews brewery={brewery} />
    </div>
  );
};

const mapStateToProps = (state,ownProps) => {
  return {
    brewery: state.selectedBrewery,
    
  };
};

export default connect(mapStateToProps)(BreweryDetails);
