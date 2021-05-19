import React from "react";
import { connect } from "react-redux";
import { breweryReviews } from "../redux/actions";
import ReviewForm from "./ReviewForm";

const BreweryReviews = ({ brewery }) => {
  if (!brewery.reviews) {
    return (
      <div>
        <h1>No Reviews Yet!</h1>
        <ReviewForm brewery={brewery} />
      </div>
    );
  }

  return (
    <div>
      <h1 className="ui header">Brewery Reviews</h1>
      <ReviewForm brewery={brewery} />

      {this.props.breweryReviews.map((review, i) => {
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

const mapStateToProps = (state) => {  
  return { breweryReviews: state.breweryReviews };
};

export default connect(mapStateToProps, { breweryReviews })(BreweryReviews);
