import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  return (
    <>
      <div className="px-[12px] pt-[30px]">
        <Link to="/" className="text-[16px] font-normal hover:text-[#dc3545]">
          Trang chủ
        </Link>
        <span className="px-[8px]">/</span>
        <span className="text-[16px] font-nomal">Áo</span>
      </div>
    </>
  );
}
