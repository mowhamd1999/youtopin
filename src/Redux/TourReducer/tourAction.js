import axios from "axios";

const fetchTourRequest = () => {
  return {
    type: "data_request",
  };
};
const fetchTourSuccess = (tours) => {
  return {
    type: "data_success",
    payload: tours,
  };
};
const fetchTourError = (error) => {
  return {
    type: "data_error",
    payload: error,
  };
};
const fetchAPI = () => {
  return (dispatch) => {
    dispatch(fetchTourRequest());
    axios
      .get("https://66cb0c7d4290b1c4f1995a66.mockapi.io/api/v1/tours")
      .then((respose) => {
        const tours = respose.data;
        dispatch(fetchTourSuccess(tours));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTourError(errorMessage));
      });
  };
};
export default fetchAPI
