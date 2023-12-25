import { FETCH_DATA_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "./action.js";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;