import { createSlice } from "@reduxjs/toolkit";

interface Product {
  quantity: number;
  product: {
    id: number;
    price: number;
    image: string;
    label: string;
  };
}

interface initialStateType {
  products: Product[];
  totalQuantity: number;
  totalAmount: number;
}

const cartStateFromLocalStorage: any = JSON.parse(
  localStorage.getItem("cartState") || "null"
);

const initialState: initialStateType = {
  products: cartStateFromLocalStorage?.products || [],
  totalQuantity: cartStateFromLocalStorage?.totalQuantity || 0,
  totalAmount: cartStateFromLocalStorage?.totalAmount || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // check if item is already in cart, in this situation only quantity of product is increasing
      const existProduct = state.products.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existProduct) {
        existProduct.quantity += action.payload.quantity;
      } else {
        state.products.push({
          quantity: action.payload.quantity,
          product: action.payload.product,
        });
      }

      state.totalQuantity += action.payload.quantity;
      state.totalAmount +=
        +action.payload.product.price * +action.payload.quantity;
    },
    removeProductFromCart: (state, action) => {
      const product = state.products.find(
        (item) => item.product.id === action.payload.id
      );

      if (product?.quantity === 1) {
        state.products = state.products.filter(
          (item) => item.product.id !== product.product.id
        );
      } else {
        if (product) product.quantity -= 1;
      }

      state.totalQuantity -= 1;
      state.totalAmount -= +action.payload.price;
    },
    removeEntireProductFromCart: (state, action) => {
      const product = state.products.find(
        (item) => item.product.id === action.payload.id
      );
      state.products = state.products.filter(
        (item) => item.product.id !== action.payload.id
      );

      if (product) state.totalQuantity -= +product?.quantity;
      if (product)
        state.totalAmount -= +action.payload.price * +product?.quantity;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  removeEntireProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
