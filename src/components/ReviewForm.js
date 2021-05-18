import React, { Component } from "react";
import { connect } from "react-redux";

import { createReview } from "../redux/actions/";

class ReviewForm extends Component {
  state = {
    name: "",
    comment: "",
    rating: null,
    brewery_id: this.props.brewery.id,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReview(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="review-name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Review:</label>
            <textarea
              name="comment"
              id="review-comment"
              cols="30"
              rows="4"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="field">
            <label>Rating: </label>
            <select
              className="ui dropdown"
              name="rating"
              onChange={this.handleChange}
            >
              <option value="">1-10</option>
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

export default connect(null, { createReview })(ReviewForm);
