import axios from "axios";

export const fetchRecipesRequest = () => ({ type: 'FETCH_RECIPES_REQUEST' });
export const fetchRecipesSuccess = (recipes) => ({ type: 'FETCH_RECIPES_SUCCESS', payload: recipes });
export const fetchRecipesFailure = (error) => ({ type: 'FETCH_RECIPES_FAILURE', payload: error });
const apiEndpoint = 'https://api.edamam.com/api/recipes/v2';
const appId = '918ac1c6';
const appKey = 'f4d8e01d05abc07b780c73706ce3048c';

export const fetchRecipes = (query,url=null) => { //query parameter, optional url parameter to fetch next page results
  return (dispatch) => {
    dispatch(fetchRecipesRequest()); 
    const endpoint = url|| apiEndpoint//use apiendpoint of url is not passed
    axios.get(endpoint, {
        params: {
            type: 'public',
            q: query,
            app_id: appId,
            app_key: appKey
          }
    })
      .then(response => (dispatch(fetchRecipesSuccess(response.data))))
      .catch(error => dispatch(fetchRecipesFailure(error)));
      
  };
};
