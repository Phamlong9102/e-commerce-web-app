import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootSaga from "./rootSaga";
import authReducer from "../reducer/auth/authSlice";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer
  },
  middleware: [sagaMiddleware, routerMiddleware],
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
