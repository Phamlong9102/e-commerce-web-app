import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BreadCrumbs() {
  const { t } = useTranslation(["common", "product"]);

  return (
    <>
      <div className="px-[12px] pt-[30px]">
        <Link to="/" className="text-[16px] font-normal hover:text-[#dc3545]">
          {t("common:home")}
        </Link>
        <span className="px-[8px]">/</span>
        <span className="text-[16px] font-nomal">{t("product:shirt")}</span>
      </div>
    </>
  );
}
