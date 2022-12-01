import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { currentUser, logOutStart } from "../../../store/auth/authSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect } from "react";

import i18n from "../../../i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();
  const handleLogout = (e: any) => {
    dispatch(logOutStart());
  };
  const [active, setActive] = useState<boolean>(false);
  const checkActive = (e: any) => {
    setActive((current) => !current);
  };

  const { t } = useTranslation(["common", "header", "product", "order"]);

  const handleLanguageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")!.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="w-[260px] bg-white px-[20px]">
          <div
            className="flex justify-end mt-[12px] mr-[-13px]"
            onClick={() => setOpenDrawer(false)}
          >
            <CloseIcon sx={{ color: "#dc3545", cursor: "pointer" }} />
          </div>
          <div className="flex justify-between items-center mt-[24px]">
            <LightModeIcon sx={{ color: "#ffc107" }} />

            {/* Selection */}
            <select
              className="bg-[#efefef] border-0 outline-0 text-[16px]"
              onChange={handleLanguageChange}
              value={localStorage.getItem("i18nextLng") || "en"}
            >
              <option>English</option>
              <option>Tiếng Việt</option>
            </select>

            <div onClick={checkActive} className="relative">
              {user?.userName},
              {active && (
                <div className="absolute top-[28px] right-0 w-[150px] h-[70px] bg-[#ccc] rounded-[6px] z-[99]">
                  <Link to="/profile" className="flex gap-[5px] items-center px-[6px] pt-[6px]">
                    <PersonIcon sx={{ fontSize: "24px" }} />
                    <span className="text-[14px]">{t("common:profile")}</span>
                  </Link>
                  <Link to="/order" className="flex gap-[5px] items-center pl-[10px] pt-[6px]">
                    <ShoppingCartIcon sx={{ fontSize: "20px" }} />
                    <span className="text-[14px]">{t("order:order")}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex relative justify-center gap-[18px] mt-[28px]">
            <SearchIcon sx={{ fontSize: "28px" }} />
            <FavoriteIcon sx={{ fontSize: "28px" }} />
            <ShoppingCartIcon sx={{ fontSize: "28px" }} />
            <div className="quatity-product top-[-12px] right-[39px]">0</div>
          </div>
          <div className="mt-[42px] font-medium	">
            <Link to="/" className="">
            {t("common:home")}
            </Link>
            <div className="mt-[10px]">
              <Link to="/store/shirt" className="">
              {t("product:shirt")}
              </Link>
            </div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span>{t("product:shirt")}</span>
              <span>{t("product:jacket")}</span>
              <span>{t("product:hoodie")}</span>
            </div>
            <div className="mt-[14px]">
              <Link to="/store/pants">{t("product:pants")}</Link>
            </div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span>{t("product:pants-item")}</span>
              <span>{t("product:jeans")}</span>
              <span>{t("product:short")}</span>
            </div>
            <div className="mt-[18px]">
              <Link to="/about">{t("header:about")}</Link>
            </div>
            <div onClick={handleLogout} className="mt-[18px]">
              {t("common:logout")}
            </div>
          </div>
        </div>
      </Drawer>
      <div className="border-[1px] border-solid border-[#5c5c5c] px-[3px] py-[3px]">
        <IconButton sx={{ padding: "0 0" }} onClick={() => setOpenDrawer(true)}>
          <MenuIcon sx={{ fontSize: "36px", color: "#000" }} />
        </IconButton>
      </div>
    </>
  );
}
