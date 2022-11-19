import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormRegister } from "../../models/user";

export interface RegisterPayload {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface registerState {
  isFetching: boolean;
  success: boolean;
  error: boolean;
  currentUser?: FormRegister;
}

const initialState: registerState = {
  isFetching: false,
  success: false,
  error: false,
  currentUser: undefined,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action: PayloadAction<FormRegister>) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
    },
  },
});

// Export actions
export const regsiterActions = registerSlice.actions; 

// Export reducer
const registerReducer = registerSlice.reducer; 
export default registerReducer; 

// Selectors
export const dataStartRegister = (state: any) => state.register.isFetching; 
export const dataRegisterSuccess = (state: any) => state.register.success; 
export const dataRegisterFailed = (state: any) => state.register.failed; 





