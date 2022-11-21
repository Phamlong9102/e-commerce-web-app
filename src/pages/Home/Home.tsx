import CustomerService from "../../components/childrenHome/customerService/CustomerService";
import NewProduct from "../../components/childrenHome/newProduct/NewProduct";
import BannerPage from "../../components/childrenHome/swiper/BannerPage";

export default function Home () {
  return (
    <>
        <BannerPage />
        <CustomerService />
        <NewProduct />
    </>
  );
}
