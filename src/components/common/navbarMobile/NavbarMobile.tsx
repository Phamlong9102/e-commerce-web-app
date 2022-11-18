import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="w-[260px] bg-white px-[20px]">
          <div
            className="flex justify-end mt-[12px] mr-[-13px]"
            onClick={() => setOpenDrawer(false)}
          >
            <CloseIcon sx={{ color: "#dc3545" }} />
          </div>
          <div className="flex justify-between items-center mt-[24px]">
            <LightModeIcon sx={{ color: "#ffc107" }} />
            <select className="bg-[#efefef] border-0 outline-0 text-[16px]">
              <option>English</option>
              <option>Tiếng Việt</option>
            </select>
            <div>User</div>
          </div>
          <div className="flex relative justify-center gap-[18px] mt-[28px]">
            <SearchIcon sx={{ fontSize: "28px" }} />
            <FavoriteIcon sx={{ fontSize: "28px" }} />
            <ShoppingCartIcon sx={{ fontSize: "28px" }} />
            <div className="quatity-product top-[-12px] right-[39px] ">0</div>
          </div>
          <div className="mt-[42px] font-medium	">
            <div className="">Trang Chủ</div>
            <div className="mt-[10px]">Áo</div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span>Áo Phông</span>
              <span>Sweater</span>
              <span>Áo Khoác</span>
              <span>Hoodie</span>
            </div>  
            <div className="mt-[14px]">Quần</div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span>Pants</span>
              <span>Quần bò</span>
              <span>Short</span>
            </div>  
            <div className="mt-[18px]">Về chúng tôi</div>
          </div>
        </div>
      </Drawer>
      <IconButton sx={{ padding: "0 0" }} onClick={() => setOpenDrawer(true)}>
        <MenuIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </>
  );
}
