import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <Outlet/>
        {/* <Outlet context={user} /> */}
      </main>
      <Footer />
    </>
  );
}
