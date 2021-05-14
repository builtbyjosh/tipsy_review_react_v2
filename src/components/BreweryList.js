import React from "react";

const BreweryList = (breweries) => {
  return (
    <>
      {this.props.breweries.map((brewery) => {
        <div className="item">
          <div className="content">{brewery.name}</div>
        </div>;
      })}
    </>
  );
};

export default BreweryList;
