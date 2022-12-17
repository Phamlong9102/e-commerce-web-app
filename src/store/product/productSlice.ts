import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductList } from "../../models/product";
import { RootState } from "../store";

export interface ProductListState {
  fetching: boolean;
  listProduct?: ProductList; 
  error: boolean;
}

const initialState: ProductListState = {
  fetching: false,
  listProduct: undefined,
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductListStart(state) {
      state.fetching = true;
    },
    fetchproductListSuccess(state, action: PayloadAction<ProductList>) {
      state.fetching = false;
      state.listProduct = action.payload;
      state.error = false;
    },
    fetchProductListFailed(state) {
      state.error = true;
    },
  },
});

// EXPORT ACTIONS
export const {
    fetchProductListStart, fetchproductListSuccess, fetchProductListFailed
} = productSlice.actions; 

//EPXORT REDUCER
const productReducer = productSlice.reducer; 
export default productReducer; 

// SELECTOR
export const dataProduct = (state: RootState) => state.product.listProduct; 
export const fetchingProduct = (state: RootState) => state.product.fetching; 
