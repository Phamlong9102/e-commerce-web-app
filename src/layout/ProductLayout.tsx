import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import NavbarProduct from "../components/LayoutProduct/navbarProduct/NavbarProduct";
import FilterFeature from "../components/LayoutProduct/filterLayout/FilterFeature";
import BreadCrumbs from "../components/LayoutProduct/breadCrumbs/BreadCrumbs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="container mx-auto pt-[74px] lg:pt-[114px]">
        <BreadCrumbs />
        <div className="block xl:flex gap-[40px]">
          <div className="xl:basis-[25%] px-[12px] pt-[20px] pb-[20px]">
            <NavbarProduct />
          </div>
          <div className="xl:basis-[75%] px-[12px]">
            <FilterFeature />
            <Outlet />
            <div className="flex justify-center items-center pb-[30px]">
              <Stack spacing={2}>
                <Pagination
                  sx={{ backgroundColor: "#fff" }}
                  count={2}
                  variant="outlined"
                  shape="rounded"
                />
              </Stack>
            </div>
          </div>
        </div>
        {/* <Outlet context={user} /> */}
      </div>
      <Footer />
    </>
  );
}
