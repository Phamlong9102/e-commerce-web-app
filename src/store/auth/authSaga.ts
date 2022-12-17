import { put, call, takeLeading, delay } from "redux-saga/effects";
import { LoginForm } from "../../models/user";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logOutFailed,
  logOutSuccees,
  logOutStart,
} from "./authSlice";
import { push } from "redux-first-history";
import userApi from "../../api/userApi";
import { toast } from "react-toastify";

function* handleLogin(user: LoginForm) {
  try {
    const { data } = yield call(userApi.login, user);
    yield put(loginSuccess({ ...data }));
    yield put(push("/"));
    toast("🦄 Đăng nhập thành công!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err: any) {
    yield put(loginFailed());
    toast("🦄 Sai tên đăng nhập hoặc mật khẩu!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

function* handleLogOut() {
  try {
    yield delay(1000);
    localStorage.removeItem("persist:cart"); 
    yield put(logOutSuccees());
    yield put(push("/login"));
    toast("🦄 Đăng xuất thành công!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    yield put(logOutFailed());
    toast("🦄 Đăng xuất thất bại! Vui lòng kiểm tra lại kết nối", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

export default function* authSaga() {
  yield takeLeading(loginStart.type, handleLogin);
  yield takeLeading(logOutStart.type, handleLogOut);
}
