import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormRegister } from "../../models/user";

export interface RegisterPayload {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  isFetching: boolean;
  success: boolean;
  error: boolean;
  currentUser?: FormRegister;
}

const initialState: AuthState = {
  isFetching: false,
  success: false,
  error: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action: PayloadAction<FormRegister>) => {
      state.isFetching = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
    },
  },
});

// Export actions
export const authActions = authSlice.actions; 

// Export reducer
const authReducer = authSlice.reducer; 
export default authReducer; 

// Selectors
export const dataStartRegister = (state: any) => state.auth.isFetching; 
export const dataRegisterSuccess = (state: any) => state.auth.success; 
export const dataRegisterFailed = (state: any) => state.auth.failed; 





