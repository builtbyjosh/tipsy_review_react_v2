import React from "react";
import { selectedBrewery } from "../redux/actions";
import BreweryReviews from "./BreweryReviews";

const BreweryDetails = (brewery) => {
  return (
    <div>
      {console.log(selectedBrewery())}
      {console.log(brewery)}
      <h1>{brewery.name}</h1>

      <BreweryReviews />
    </div>
  );
};

export default BreweryDetails;
