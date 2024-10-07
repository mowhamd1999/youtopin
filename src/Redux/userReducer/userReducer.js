const initialState = {
  user: null,
  products: [],
  total: 0,
  isCheckOut: false,
  productCounter: 0,
};

const sumItem = (items) => {
  const productCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return { productCounter, total };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "ADD_PRODUCT":
      if (!state.products.find((item) => item.id === action.payload.id)) {
        const newProducts = [
          ...state.products,
          { ...action.payload, quantity: action.payload.quantity },
        ];
        return {
          ...state,
          products: newProducts,
          ...sumItem(newProducts), 
        };
      }
      return {
        ...state,
        ...sumItem(state.products),
      };

    case "REMOVE_PRODUCT":
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: filteredProducts,
        ...sumItem(filteredProducts), 
      };

    case "INCREASE":
      const updatedProductsI = state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        products: updatedProductsI,
        ...sumItem(updatedProductsI),
      };

    case "DECREASE":
      const updatedProductsD = state.products.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        products: updatedProductsD,
        ...sumItem(updatedProductsD), 
      };

    case "CHECK_OUT":
      return {
        ...state,
        products: [],
        total: 0,
        isCheckOut: true,
        productCounter: 0,
      };

    default:
      return state;
  }
};

export default userReducer;
