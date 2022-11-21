import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataLoginResponse {
    _id: string;
    userName: string;
    email: string;
    admin: boolean;
    accessToken: string;
    refreshToken: string;
    __v: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthState {
    isFetching: boolean;
    currentUser?: any;
    error: boolean;
}

export interface LoginState {
    userName: string;
    password: string;
}

const initialState: AuthState = {
    isFetching: false,
    currentUser: null,
    error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state, action: PayloadAction<LoginState>) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action: PayloadAction<any>) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOutStart: (state) => {
            state.isFetching = true;
        },
        logOutSuccees: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        },
        logOutFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

// EXPORT ACTIONS
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logOutStart,
    logOutSuccees,
    logOutFailed,
} = authSlice.actions;

// EXPORT REDUCER
const authReducer = authSlice.reducer;
export default authReducer;

// SELECTOR
export const currentUser = (state: any) => state.auth.currentUser;
