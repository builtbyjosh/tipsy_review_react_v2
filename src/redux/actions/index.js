import railsFetch from '../APIs/railsFetch'

export const fetchSavedBreweries = () => {
  return async (dispatch) => {
    const res = await railsFetch.get('/breweries');
    
    dispatch({type: 'FETCH_RAILS_BREWERIES', payload: res.data})
  };
};

export const selectedBrewery = (brewery) => {
  return {
    type: 'SELECTED_BREWERY',
    payload: brewery
  }
}