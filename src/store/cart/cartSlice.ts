import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../models/cart";
import { RootState } from "../store";

export interface CartState {
  isCartLoading: boolean;
  cartItems: any;
  itemRemove: null;
  cart: any[];
  error: boolean;
}

const initialState: CartState = {
  isCartLoading: false,
  cartItems: null,
  itemRemove: null,
  cart: [],
  error: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartStart(state, action: PayloadAction<any>) {
      state.isCartLoading = true;
      state.cartItems = [...state.cartItems, action.payload];
    },
    fetchCartSuccess(state, action: PayloadAction<any>) {
      state.isCartLoading = false;
      state.cart = action.payload;
    },
    fetchCartFailed(state) {
      state.isCartLoading = false;
      state.error = true;
    },

    addCartStart(state, action: PayloadAction<CartItem>) {
      state.isCartLoading = true;
      state.cartItems = action.payload;
    },
    addCartSuccess(state, action: PayloadAction<Cart>) {
      state.isCartLoading = false;
      state.cart = [...state.cart, action.payload];
    },
    addCartFailed(state) {
      state.isCartLoading = false;
      state.error = true;
    },

    removeProductStart(state, action: PayloadAction<any>) {
      state.isCartLoading = true;
      state.itemRemove = action.payload;
    },
    removeProductSuccess(state, action: any) {
      state.isCartLoading = false;
      state.cart = action.payload;
    },
    removeProductFailed(state) {
      state.isCartLoading = false;
      state.error = true;
    },
  },
});

// EXPORT ACTIONS
export const cartActions = cartSlice.actions;

// EXPORT REDUCER
const cartReducer = cartSlice.reducer;
export default cartReducer;

// EXPORT SELECTOR
export const dataCart = (state: RootState) => state.cart.cart;
