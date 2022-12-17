import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  dataProduct,
  fetchingProduct,
  fetchProductListStart,
} from "../../store/product/productSlice";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function Pants() {
  const loading = useAppSelector(fetchingProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductListStart());
  }, [dispatch]);
  const currentData = useAppSelector(dataProduct);
  const filterProduct = currentData?.filter((product: any) => product.category === "pants");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="block md:grid md:grid-rows-auto md:grid-cols-2 xl:grid-rows-auto xl:grid-cols-3 gap-[18px]">
        {filterProduct?.map((product: any) => (
          <div
            className="mb-[20px] cursor-pointer relative test-hover-block"
            key={product._id}
            onClick={() => {
              navigate(`/product/${product._id}`);
            }}
          >
            <img className="" src={product.imageUrl.imageUrl01} alt="" />
            <div className="pt-[20px]">
              <div className="text-[16px] font-bold mb-[16px]">{product.productName}</div>
              <div className="flex justify-between items-center">
                <span className="text-[20px] font-semibold">${product.price}</span>
                <FiberManualRecordIcon className="dot-transition" sx={{ fontSize: "18px" }} />
              </div>
            </div>
            <div className="style-animation-home-product">
              <span className="style-feature-home-product box-shadow-home-product">
                <SearchIcon className="text-black hover:text-[red]" sx={{ fontSize: "22px" }} />
              </span>
              <span className="style-feature-home-product box-shadow-home-product">
                <FavoriteIcon className="text-black hover:text-[red]" sx={{ fontSize: "19px" }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
