import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import beforeFooter from "../../../assets/images/beforeFooter.png";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { fetchProductListStart } from "../../../store/product/productSlice";
import { dataProduct } from "../../../store/product/productSlice";
import { useAppSelector } from "../../../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NewProduct() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductListStart());
  }, [dispatch]);
  const currentData = useAppSelector(dataProduct);
  const filterProduct = currentData?.filter((product: any) => product?.new_arrival === true);
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-[12px] pb-[20px]">
          <span className="text-[30px]">{t("common:newArrival")}</span>
        </div>
        <div className="block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-[18px]">
          {filterProduct?.map((product: any) => (
            <div
              className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
              key={product.id}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <img className="" src={product.image_url.image_url_01} alt="" />
              <div className="pt-[20px]">
                <div className="text-[16px] font-bold mb-[16px]">{product.product_name}</div>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] font-semibold">${product.price}</span>
                  {/* <FiberManualRecordIcon className="dot-transition" sx={{ fontSize: "18px" }} /> */}
                </div>
              </div>
              {/* <div className="style-animation-home-product">
                <span className="style-feature-home-product box-shadow-home-product">
                  <SearchIcon className="text-black hover:text-[red]" sx={{ fontSize: "22px" }} />
                </span>
                <span className="style-feature-home-product box-shadow-home-product">
                  <FavoriteIcon className="text-black hover:text-[red]" sx={{ fontSize: "19px" }} />
                </span>
              </div> */}
            </div>
          ))}
        </div>
        <div className="hidden xl:flex justify-center my-[30px]">
          <img src={beforeFooter} alt="" />
        </div>
      </div>
    </>
  );
}
