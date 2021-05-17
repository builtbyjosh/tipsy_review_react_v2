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
              rows="4"
            ></textarea>
          </div>
          <div className="field">
            <label>Rating: </label>
            <select className="ui dropdown">
              <option value="" >1-10</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button type="submit">Add Review</button>
        </form>
      </>
    );
  }
}

export default ReviewForm;
