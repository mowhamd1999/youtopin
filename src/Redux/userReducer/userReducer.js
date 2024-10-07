const initialState = {
  user: null,
  products: [],
  total: 0,
  isCheckOut: false,
  productCounter: 0,
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
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }
      return state;
    case "REMOVE_PRODUCT":
      const newProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: newProducts,
      };
    case "INCREASE":
      const updatedProductsI = state.products.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        products: updatedProductsI,
      };
    case "DECREASE":
      const updatedProductsD = state.products.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        products: updatedProductsD,
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
