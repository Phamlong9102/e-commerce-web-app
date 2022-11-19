import { regsiterActions } from "../reducer/auth/registerSlice";
import axios from "axios";
import { FormRegister, LoginForm } from "../models/user";
import { toast } from "react-toastify";
import { loginActions } from "../reducer/auth/loginSlice";

export const registerUser = async (user: FormRegister, dispatch: any, navigate: any) => {
  dispatch(regsiterActions.registerStart());
  try {
    await axios.post("https://minh-clone-api.herokuapp.com/register", user);
    dispatch(regsiterActions.registerSuccess(user));
    navigate("/login");
    toast("🦄 Regsiter successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    dispatch(regsiterActions.registerFailed());
  }
};

export const userLogin = async (user: LoginForm, dispatch: any, navigate: any) => {
  dispatch(loginActions.loginStart());
  try {
    const res = await axios.post("http://localhost:3000/login", user);
    dispatch(loginActions.loginSuccess(res.data));
    navigate("/");
    toast("🦄 Login successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    dispatch(loginActions.loginFailed());
  }
};