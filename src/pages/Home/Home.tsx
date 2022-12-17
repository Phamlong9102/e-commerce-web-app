import CustomerService from "../../components/ChildrenHome/customerService/CustomerService";
import NewProduct from "../../components/ChildrenHome/newProduct/NewProduct";
import BannerPage from "../../components/ChildrenHome/swiper/BannerPage";
import LoadingModal from "../../components/Loading/Loading";
import { fetchingProduct } from "../../store/product/productSlice";
import { useAppSelector } from "../../store/hooks/hooks";


export default function Home() {
  const loading = useAppSelector(fetchingProduct);

  return (
    <>
      {loading && <LoadingModal />}
      <BannerPage />
      <CustomerService />
      <NewProduct />
    </>
  );
}
