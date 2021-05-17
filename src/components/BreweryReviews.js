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
        <button
        onClick={handleClick}>Add A Review</button>
        <ReviewForm />
      </div>
    );
  }
  return (
    <div>
      <h1 className="ui header">Brewery Reviews</h1>
      {brewery.reviews.map((review, i) => {
        return (
          <div key={i} className="ui segment">
            <p>{review.comment}</p>
            <p>{review.name}</p>
          </div>
        );
      })}
      <button onClick={handleClick}>Add A Review</button>
    </div>
  );
};

export default BreweryReviews;
