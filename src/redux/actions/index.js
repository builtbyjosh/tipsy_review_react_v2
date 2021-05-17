import railsFetch from "../APIs/railsFetch";
import apiFetch from '../APIs/apiFetch'

export const fetchSavedBreweries = () => {
  return async (dispatch) => {
    const res = await railsFetch.get("/breweries");

    dispatch({ type: "FETCH_RAILS_BREWERIES", payload: res.data });
  };
};

export const fetchAPIBreweries = (query) => {
  return async (dispatch) => {
    const res = await apiFetch.get(`/search?query=${query}`);
    dispatch({ type: "FETCH_API_BREWERIES", payload: res.data });
  };
};

export const selectedBrewery = (brewery) => {
  return {
    type: "SELECTED_BREWERY",
    payload: brewery,
  };
};

// export const createReview = (newReview) => {
//   return (dispatch) =
// }