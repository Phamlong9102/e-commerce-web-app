import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginForm } from "../../models/user";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { LoginState } from "../../store/auth/authSlice";
import { loginStart } from "../../store/auth/authSlice";

export interface RegisterUserProps {
  initialValues?: LoginForm;
  onSubmit?: (formValues: LoginForm) => void;
}

export default function Register() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const schema = yup
    .object({
      userName: yup.string().trim().required("Vui lòng nhập tên đăng nhập"),
      password: yup.string().trim().required("Vui lòng nhập mật khẩu"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginState>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: LoginState) => {
    const newUser = {
      userName: userName,
      password: password,
    };
    dispatch(loginStart(newUser)); 
  };

  return (
    <>
      <div className="background-form py-[40px] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[500px]">
          <div className="px-[12px] w-[100%]">
            <div className="w-[100%] h-fit p-[48px] bg-white rounded-[6px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center text-[30px] pb-[20px] font-normal">
                  Đăng nhập
                </div>
                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Tên đăng nhập</label>
                  <input
                    {...register("userName")}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    className="form-style"
                    type="text"
                  />
                  {errors.userName ? (
                    <p className="text-[#dc3545]">{errors.userName.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Mật khẩu</label>
                  <input
                    {...register("password")}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-style"
                    type="password"
                  />
                  {errors.password ? (
                    <p className="text-[#dc3545]">{errors.password.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="pb-[16px]">
                  <Link to="/register" className="text-[#dc3545]">Chưa có tài khoản</Link>
                </div>
                <div className="flex items-center justify-center  pb-[16px]">
                  <Link to="/reset" className="text-[#dc3545] font-medium">
                    Quên mật khẩu
                  </Link>
                </div>
                <div className="flex items-center justify-center pb-[20px]">
                  <button className="button-register">
                    <span className="text-white text-[18px] font-medium">Đăng nhập</span>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <Link to="/" className="text-[#dc3545] font-medium">Trang chủ</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
