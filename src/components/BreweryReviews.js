import React from "react";

const BreweryReviews = ({ brewery }) => {
  
  if (brewery.reviews.length === 0) {
    return (
      <div>
        <h1>No Reviews Yet!</h1>
        
      </div>
    );
  }
  return (
    <div>
      <h1>Brewery Reviews</h1>
      {brewery.reviews.map((review, i) => {
        return (
          <div key={i}>            
            <p>{review.comment}</p>
            <p>{review.name}</p>
            <br />
          </div>
        )
      })}
    </div>
  );
};

export default BreweryReviews;
