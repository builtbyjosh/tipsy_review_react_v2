import { combineReducers } from "redux";

const breweryReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RAILS_BREWERY":
      return action.payload;
    case "BREWERY_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ breweries: breweryReducer })

export default rootReducer
