import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { token, logOutStart } from "../../../store/auth/authSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import { dataCart } from "../../../store/cart/cartSlice";

import i18n from "../../../i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(token);
  const cartBefore = userInfo?.cart;
  const currentCart = useAppSelector(dataCart);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  const { t } = useTranslation(["common", "header", "product", "order"]);
  const [finalCart, SetFinalCart] = useState<any>();

  const checkActive = (e: any) => {
    setActive((current) => !current);
  };

  const handleLogout = (e: any) => {
    dispatch(logOutStart());
  };

  // LANGUAGE
  const handleLanguageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }, []);

  // CHECK LANGUAGE
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")!.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  // NHÓM CART CURENT VÀ CART BEFORE
  useEffect(() => {
    if (cartBefore === null) {
      const newCart = [...currentCart];
      const flatArray = newCart?.flat(Infinity);
      SetFinalCart(flatArray);
    }
    if (cartBefore !== null) {
      const newCart = [...currentCart, cartBefore];
      const flatArray = newCart?.flat(Infinity);
      SetFinalCart(flatArray);
    }
  }, [cartBefore, currentCart]);

  // TỔNG SỐ LƯỢNG ITEM TRONG GIỎ HÀNG
  const totalProduct = finalCart?.reduce((acc: any, curValue: any) => acc + curValue.quantity, 0);

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
          <div className="flex justify-between items-center mt-[24px] cursor-pointer">
            <LightModeIcon sx={{ color: "#ffc107" }} />
            {/* Selection */}
            <select
              className="bg-[#efefef] border-0 outline-0 text-[16px] cursor-pointer"
              onChange={handleLanguageChange}
              value={localStorage.getItem("i18nextLng") || "vi" || "en"}
            >
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>

            {/*  */}
            <div onClick={checkActive} className="relative">
              {userInfo?.user_name},
              {active && (
                <div className="absolute top-[28px] right-0 w-[240px] h-[150px] px-[16px] py-[8px] bg-[#fff] rounded-[6px] z-[99] border-[1px] border-solid border-[rgba(0_0_0_0.176)]">
                  <Link
                    to="/profile"
                    className="flex gap-[5px] items-center p-[8px] style-hover-menu"
                  >
                    <PersonIcon sx={{ fontSize: "24px" }} />
                    <span className="text-[16px]">{t("common:profile")}</span>
                  </Link>
                  <Link
                    to="/order"
                    className="flex gap-[5px] items-center p-[8px] style-hover-menu"
                  >
                    <ShoppingCartIcon sx={{ fontSize: "20px" }} />
                    <span className="text-[16px]">{t("order:order")}</span>
                  </Link>
                  <div className="flex justify-center items-center text-center">
                    <button className="px-[16px] py-[8px] bg-[#dc3545] rounded-[8px] style-button-logout">
                      <span onClick={handleLogout} className="text-white">
                        {t("common:logout")}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex relative justify-center gap-[18px] mt-[28px]">
            <SearchIcon sx={{ fontSize: "28px", cursor: "pointer" }} className="style-hover-menu" />
            <Link to="/wish-list">
              <FavoriteIcon
                sx={{ fontSize: "28px", cursor: "pointer" }}
                className="style-hover-menu"
              />
            </Link>
            <Link to="/shopping-cart">
              <ShoppingCartIcon
                sx={{ fontSize: "28px", cursor: "pointer" }}
                className="style-hover-menu"
              />
              {/* {userInfo?.cart && ( */}
              <div className="quantity-product top-[-12px] right-[39px]">{totalProduct}</div>
              {/* )} */}
            </Link>
          </div>
          <div className="mt-[42px] font-medium	">
            <Link to="/" className="style-hover-menu">
              {t("common:home")}
            </Link>
            <div className="mt-[10px]">
              <Link to="/store/shirt" className="style-hover-menu">
                {t("product:shirt")}
              </Link>
            </div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span className="style-hover-menu">{t("product:shirt")}</span>
              <span className="style-hover-menu">{t("product:jacket")}</span>
              <span className="style-hover-menu">{t("product:hoodie")}</span>
            </div>
            <div className="mt-[14px]">
              <Link to="/store/pants" className="style-hover-menu">
                {t("product:pants")}
              </Link>
            </div>
            <div className="flex flex-col mt-[8px] ml-[18px]">
              <span className="style-hover-menu">{t("product:pants-item")}</span>
              <span className="style-hover-menu">{t("product:jeans")}</span>
              <span className="style-hover-menu">{t("product:short")}</span>
            </div>
            <div className="mt-[18px]">
              <Link to="/about" className="style-hover-menu">
                {t("header:about")}
              </Link>
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