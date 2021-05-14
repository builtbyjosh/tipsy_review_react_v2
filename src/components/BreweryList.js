import React from "react";
import { selectedBrewery } from "../redux/actions/";

const BreweryList = ({ breweries }) => {
  return breweries.map((brewery) => {
    return (
      <div className="item" key={brewery.id}>
        <div
          className="content"
          onClick={() => {            
            selectedBrewery(brewery);
          }}
        >
          {brewery.name}
        </div>
      </div>
    );
  });
};

export default BreweryList;
