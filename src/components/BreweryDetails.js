import React from "react";
import BreweryReviews2 from "./BreweryReviews2";
import { connect } from "react-redux";
import { breweryReviews } from "../redux/actions";

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

      <BreweryReviews2 brewery={brewery} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    brewery: state.selectedBrewery,

  };
};

export default connect(mapStateToProps)(BreweryDetails);
