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
import jwt_decode from "jwt-decode";

function* handleLogin(user: LoginForm) {
  try {
    const { data } = yield call(userApi.login, user);
    const token = jwt_decode(data);

    console.log(token);

    yield put(loginSuccess(token));
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
    localStorage.removeItem("persist:auth");
    localStorage.removeItem("persist:i18nextLng");
    localStorage.removeItem("persist:favoriteProduct");
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
