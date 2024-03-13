const initialState = {
    recipes: [],
    loading: false,
    error: null
  };
  
 export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_RECIPES_SUCCESS':
        return { ...state, loading: false, recipes: action.payload };
      case 'FETCH_RECIPES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SET_RECIPES':
        return{...state,loading:false,}
      default:
        return state;
    }
  };
  