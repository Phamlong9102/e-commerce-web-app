import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormRegister } from "../../models/user";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { registerUser } from "../../api/authRequest";

export interface RegisterUserProps {
  initialValues?: FormRegister;
  onSubmit?: (formValues: FormRegister) => void;
}

export interface FormValidate extends FormRegister {
  confirmPassword: string;
}

export default function Register() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = yup
    .object({
      userName: yup
        .string()
        .trim()
        .required("Vui lòng nhập tên người dùng")
        .min(4, "Tên đăng nhập phải có ít nhất 4 kí tự"), 
      email: yup
        .string()
        .trim()
        .required("Vui lòng nhập Email")
        .email("Định dạng email không đúng"),
      password: yup
        .string()
        .trim()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải nhiều hơn 6 kí tự"),
      confirmPassword: yup
        .string()
        .trim()
        .required("Vui lòng xác nhận lại mật khẩu")
        .oneOf([yup.ref("password")], "Mật khẩu nhập lại không đúng"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValidate>({ resolver: yupResolver(schema) });

  
  const onSubmit = async (data: FormRegister) => {
    const newUser = {
      userName: userName,
      email: email,
      password: password,
    };
    await registerUser(newUser, dispatch, navigate); 
  };

  return (
    <>
      <div className="background-form flex flex-col justify-center items-center py-[40px] overflow-auto	">
        <div className="container mx-auto max-w-[500px] ">
          <div className="px-[12px] w-[100%]">
            <div className="w-[100%] h-fit p-[48px] bg-white rounded-[6px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center text-[30px] pb-[20px] font-normal">
                  Đăng ký
                </div>
                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Tên đăng nhập</label>
                  <input
                    {...register("userName")}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    name="userName"
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
                  <label className="pb-[8px]">Email</label>
                  <input
                    {...register("email")}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    className="form-style"
                    type="text"
                  />
                  {errors.email ? <p className="text-[#dc3545]">{errors.email.message}</p> : <></>}
                </div>

                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Mật khẩu</label>
                  <input
                    {...register("password")}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    className="form-style"
                    type="password"
                  />
                  {errors.password ? (
                    <p className="text-[#dc3545]">{errors.password.message}</p>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Nhập lại mật khẩu</label>
                  <input
                    {...register("confirmPassword")}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    name="confirmPassword"
                    className="form-style"
                    type="password"
                  />
                  {errors.confirmPassword ? (
                    <p className="text-[#dc3545]">{errors.confirmPassword.message}</p>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="style-hover-menu pb-[16px]">
                  <Link to="/login">Đã có tài khoản</Link>
                </div>

                <div className="flex items-center justify-center">
                  <button className="button-register">
                    <span className="text-white text-[18px] font-medium">Đăng ký</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
