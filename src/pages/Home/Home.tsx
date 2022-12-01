import CustomerService from "../../components/childrenHome/customerService/CustomerService";
import NewProduct from "../../components/childrenHome/newProduct/NewProduct";
import BannerPage from "../../components/childrenHome/swiper/BannerPage";
import LoadingModal from "../../components/loadingModal/LoadingModal";
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
