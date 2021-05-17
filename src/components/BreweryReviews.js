import React from "react";
import ReviewForm from "./ReviewForm";

const BreweryReviews = ({ brewery }) => {
  const handleClick = (e) => {
    console.log(brewery)
  }

  if (!brewery.reviews) {
    return (
      <div>
        <h1>No Reviews Yet!</h1>
        <ReviewForm brewery={brewery}/>
      </div>
    );
  }
  return (
    <div>
      <h1 className="ui header">Brewery Reviews</h1>
      <ReviewForm brewery={brewery}/>
      {brewery.reviews.map((review, i) => {
        return (
          <div key={i} className="ui segment">
            <p>{review.comment}</p>
            <p>{review.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BreweryReviews;
