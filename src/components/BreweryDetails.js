import React from "react";
import BreweryReviews from "./BreweryReviews";

const BreweryDetails = (brewery) => {
  if (!brewery) {
    return (
      <div>
        <h1>Select A Brewery</h1>
      </div>
    );
  }
  return (
    <div>
      {console.log(brewery)}
      <h1>{brewery.name}</h1>
      <h1>{brewery.city}</h1>

      <BreweryReviews />
    </div>
  );
};

export default BreweryDetails;
