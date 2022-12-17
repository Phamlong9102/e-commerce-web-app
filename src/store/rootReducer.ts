import { combineReducers } from "@reduxjs/toolkit";
import routerReducer from "./router/routerReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../store/auth/authSlice"; 
import registerReducer from "./register/registerSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const cartUserConfig = {
  key: "cart", 
  storage: storage, 
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), 
  register: registerReducer, 
  router: routerReducer,
  product: productReducer, 
  cart: persistReducer(cartUserConfig, cartReducer), 
});

export default rootReducer;
