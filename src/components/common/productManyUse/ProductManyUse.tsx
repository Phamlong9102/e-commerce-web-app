import homeProduct1 from "../../../assets/images/homeProduct1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductManyUse() {
  return (
    <>
      <div className="mb-[20px] cursor-pointer relative test-hover-block">
        <img className="" src={homeProduct1} alt="" />
        <div className="pt-[20px]">
          <div className="text-[16px] font-bold mb-[16px]">Candles Gasoline Tshirt</div>
          <div className="flex justify-between items-center">
            <span className="text-[20px] font-semibold">$39</span>
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
    </>
  );
}
