import { authActions } from "../reducer/auth/authSlice";
import axios from "axios";
import { FormRegister } from "../models/user";
import { toast } from "react-toastify";

export const registerUser = async (user: FormRegister, dispatch: any, navigate: any) => {
  dispatch(authActions.registerStart());
  try {
    await axios.post("https://minh-clone-project.herokuapp.com/register", user);
    dispatch(authActions.registerSuccess(user));
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
    dispatch(authActions.registerFailed());
  }
};
