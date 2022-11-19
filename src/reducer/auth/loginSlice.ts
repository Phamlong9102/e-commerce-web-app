import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginForm } from "../../models/user";

export interface loginPayload {
  userName: string;
  password: string;
}

export interface loginState {
  isFetching: boolean;
  currentUser?: LoginForm;
  error: boolean;
}

const initialState: loginState = {
    isFetching: false, 
    currentUser: undefined, 
    error: false, 
}

const loginSlice = createSlice({
  name: "login",
  initialState: initialState, 
  reducers: {
    loginStart: (state) => {
        state.isFetching = true;
    }, 
    loginSuccess: (state, action: PayloadAction<LoginForm>) => {
        state.isFetching = false; 
        state.currentUser = action.payload; 
        state.error = false; 
    }, 
    loginFailed: (state) => {
        state.isFetching = false; 
        state.error = true; 
    }
  }
});

// EXPORT ACTIONS
export const loginActions = loginSlice.actions; 

// EXPORT REDUCER
export default loginSlice.reducer; 
