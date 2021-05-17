import React, { Component } from "react";

class ReviewForm extends Component {
  state = {
    name: "",
    comment: "",
    rating: null,
  };

  render() {
    return (
      <>
        <form action="" className="ui form">
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="review-name"
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label>Review:</label>
            <textarea
              name="comment"
              id="review-comment"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="ui star rating" data-rating="5"></div>
          <button type="submit">Submit Rating</button>
        </form>
      </>
    );
  }
}

export default ReviewForm;
