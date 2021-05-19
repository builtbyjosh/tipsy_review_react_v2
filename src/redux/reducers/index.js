import { combineReducers } from "redux";

const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RAILS_BREWERIES":
      return action.payload;
    case "FETCH_API_BREWERIES":
      return action.payload;

    default:
      return state;
  }
};

const selectedBreweryReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_BREWERY":
      return action.payload;
    default:
      return state;
  }
};

const breweryReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_BREWERY_REVIEW":
      return action.payload;
    case "CREATE_REVIEW":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  breweries: breweriesReducer,
  selectedBrewery: selectedBreweryReducer,
  breweryReviews: breweryReviewsReducer,
});

export default rootReducer;
