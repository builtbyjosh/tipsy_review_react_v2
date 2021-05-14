import React from 'react';
import BreweryReviews from './BreweryReviews';

const BreweryDetails = (brewery) => {
  return (
    <div>
      <h1>Brewery Details</h1>
      <BreweryReviews brewery={brewery}/>
    </div>
  );
}

export default BreweryDetails;
