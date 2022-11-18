import logoHeader from "../../../assets/images/logoHeader.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavbarMobile from "../navbarMobile/NavbarMobile";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 z-[10] w-full">
        <div className="w-full bg-white shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] transition-header">
          {/* Header >768px */}
          <div className="hidden h-[40px] lg:flex bg-black w-full">
            <div className="container mx-auto flex gap-[14px] py-2 px-[12px] xl:px-0 justify-end items-center">
              <LightModeIcon sx={{ fontSize: "22px", color: "#f6b331", cursor: "pointer" }} />
              <select className="bg-black outline-0 border-0 text-white cursor-pointer">
                <option value="cursor-pointer	">English</option>
                <option value="cursor-pointer	">Tiếng Việt</option>
              </select>
              <Link to="/login" className="text-white">Đăng nhập</Link>
            </div>
          </div>
          {/* Menu */}
          <div className="container px-[12px] mx-auto">
            <div className="flex justify-between items-center	h-[74px] ">
              <Link to="/">
                <img className="" src={logoHeader} alt="" />
              </Link>
              <div className="hidden lg:flex gap-[26px] text-header">
                <Link to="/" className="style-hover-menu">Trang chủ</Link>
                <Link to="/store/shirt" className="style-hover-menu">Áo</Link>
                <Link to="/store/trouser" className="style-hover-menu">Quần</Link>
                <Link to="/about" className="style-hover-menu">Về chúng tôi</Link>
              </div>
              <div className="relative hidden lg:flex gap-[18px]">
                <SearchIcon className="style-hover-menu" sx={{ fontSize: "30px" }} />
                <FavoriteIcon className="style-hover-menu" sx={{ fontSize: "30px" }} />
                <ShoppingCartIcon className="style-hover-menu" sx={{ fontSize: "30px" }} />
                <div className="quatity-product right-[-12px] top-[-12px]">0</div>
              </div>
              <div className="block lg:hidden">
                <NavbarMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
