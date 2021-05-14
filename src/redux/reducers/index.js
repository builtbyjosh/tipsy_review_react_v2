import { combineReducers } from "redux";

const breweryReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_RAILS_BREWERY":
      return action.payload;
    case "BREWERY_SELECTED":
      return action.payload;
    default:
      return state;
  }
};



export default breweryReducer;

//combineReducers({ placeholder: () => "Change later" });
