const initialState = {
  loading: false,
  tours: [],
  error: "",
};
const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case "data_request":
      return {
        ...state,
        loading: true,
      };
    case "data_success":
      return {
        loading: false,
        tours: action.payload,
      };
    case "data_error":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default toursReducer;
