import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import NavbarProduct from "../components/layoutProduct/navbarProduct/NavbarProduct";
import PaginationProduct from "../components/layoutProduct/paginationProduct/PaginationProduct";
import FilterFeature from "../components/layoutProduct/filterLayout/FilterFeature";
import BreadCrumbs from "../components/layoutProduct/breadCrumbs/BreadCrumbs";

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
            <PaginationProduct />
          </div>
        </div>
        {/* <Outlet context={user} /> */}
      </div>
      <Footer />
    </>
  );
}
