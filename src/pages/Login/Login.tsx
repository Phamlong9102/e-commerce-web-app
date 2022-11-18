import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="background-form py-[40px] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[500px]">
          <div className="px-[12px] w-[100%]">
            <div className="w-[100%] h-fit p-[48px] bg-white rounded-[6px]">
              <form noValidate>
                <div className="flex justify-center items-center text-[30px] pb-[20px] font-normal">
                  Đăng nhập
                </div>
                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Tên đăng nhập</label>
                  <input className="form-style" type="text" />
                  <p className="text-[#dc3545]"></p>
                </div>
                <div className="flex flex-col pb-[16px]">
                  <label className="pb-[8px]">Mật khẩu</label>
                  <input className="form-style" type="password" />
                  <p className="text-[#dc3545]"></p>
                </div>
                <div className="style-hover-menu pb-[16px]">
                  <Link to="/register">Chưa có tài khoản</Link>
                </div>
                <div className="flex items-center justify-center  pb-[16px]">
                  <Link to="/reset" className="text-[#dc3545] font-medium">
                    Quên mật khẩu
                  </Link>
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
