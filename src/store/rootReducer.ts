import { combineReducers } from "@reduxjs/toolkit";
import routerReducer from "./router/routerReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../store/auth/authSlice"; 
import registerReducer from "./register/registerSlice";
import productReducer from "./product/productSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), 
  register: registerReducer, 
  router: routerReducer,
  product: productReducer, 
});

export default rootReducer;
