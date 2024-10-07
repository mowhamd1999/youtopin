const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
const removeProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
const increase = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};
const decrease = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};
const checkOut = (product) => {
  return {
    type: "CHECK_OUT",
    payload: product,
  };
};
export { addProduct, removeProduct, increase, decrease, checkOut };
