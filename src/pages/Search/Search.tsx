import FilterFeature from "../../components/LayoutProduct/FilterLayout/FilterFeature";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";
import productImage1 from "../../assets/images/productImage1.jpg";

export default function Search() {
  // const navigate = useNavigate();

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className="container px-[12px] mx-auto">
        <div className="mt-[48px] lg:mt-[90px] flex justify-center text-center text-[24px]">
          Seach result for "Shirt"
        </div>
        <div className="px-[50px] my-[48px]">
          <FilterFeature />
        </div>

        <div className="block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-[18px]">
          {/* {filterProduct?.map((product: any) => ( */}
          <div
            className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
            // key={product.id}
            // onClick={() => {
            //   navigate(`/products/${product.id}`);
            // }}
          >
            <img className="" src={productImage1} alt="Product1" />
            <div className="pt-[20px]">
              <div className="text-[16px] font-bold mb-[16px]">Candle Linh Tinh</div>
              <div className="flex justify-between items-center">
                <span className="text-[20px] font-semibold">$789</span>
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
          {/* ))} */}
        </div>
      </div>
    </>
  );
}
