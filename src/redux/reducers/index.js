import { combineReducers } from "redux";

const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RAILS_BREWERIES":
      return action.payload;
    default:
      return state;
  }
};

const breweryReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_BREWERY":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  breweries: breweriesReducer,
  selectedBrewery: breweryReducer,
});

export default rootReducer;
