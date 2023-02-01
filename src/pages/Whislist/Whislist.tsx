// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { listProductFavorite } from "../../store/list-favorite/listFavoriteSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { useEffect } from "react";
// import Loading from "../../components/Loading/Loading";

export default function WishList() {
  const navigate = useNavigate();
  const listFavoriteProduct = useAppSelector(listProductFavorite);
  const listFavorite = listFavoriteProduct?.flat(Infinity);

  console.log("listFavorite: ", listFavorite);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className="container px-[12px] mx-auto">
        <div className="mt-[48px] mb-[20px] lg:mt-[90px] flex justify-center text-center text-[30px] font-semibold">
          Wish List
        </div>

        {listFavorite === null ? (
          <div className="flex justify-center items-center font-size-wish-list pb-[20px]">
            No item in wishlist
          </div>
        ) : (
          <div className="block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-[18px]">
            {listFavorite?.map((product: any) => (
              <div
                className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
                key={product.id}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <img className="" src={product.image_url.image_url_01} alt="Product1" />
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
                    <FavoriteIcon
                      className="text-black hover:text-[red]"
                      sx={{ fontSize: "19px" }}
                    />
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
