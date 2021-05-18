import React from "react";
import ReviewForm from "./ReviewForm";

const BreweryReviews = ({ brewery }) => {
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

// const mapStateToProps = (state) => {
//   console.log(state.selectedBrewery)
//   return { breweryReviews: state.selectedBrewery.reviews };
// };

export default BreweryReviews;
