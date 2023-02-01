import FilterFeature from "../../components/LayoutProduct/FilterLayout/FilterFeature";
import { useTranslation } from "react-i18next";

export default function Order() {
  const { t } = useTranslation(["order", "common"]);

  return (
    <>
      <div className="container px-[12px] py-[48px] mx-auto">
        <div className="mt-[40px]">
          <FilterFeature />
          <div className="container mx-auto overflow-x-auto w-full">
            <table className="min-w-[850px] table w-full">
              <thead className="table-ordertable-header-group">
                <tr className="table-row outline-0 align-middle ">
                  <th className="table-cell text-left table-order">Id</th>
                  <th className="table-cell text-left table-order">Ngày đặt</th>
                  <th className="table-cell text-left table-order">Ngày nhận hàng</th>
                  <th className="table-cell text-left table-order">Tổng cộng</th>
                  <th className="table-cell text-left table-order">Tình trạng đơn hàng</th>
                  <th className="table-cell text-left table-order">Chi tiết đơn hàng</th>
                </tr>
              </thead>
              <tbody className="table-row-group border-b-[1px] border-b-[#ccc] border-solid">
                <tr className="table-row outline-0 align-middle">
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px]">iUgsfdgh123Fdhsgk</div>
                  </td>
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px]">Thứ 4, Tháng 9, 14 2022</div>
                  </td>
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px]">Thứ 6, Tháng 10, 22 2022</div>
                  </td>
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px]">90</div>
                  </td>
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px]">Đang vận chuyển</div>
                  </td>
                  <td className="table-cell text-left table-order">
                    <div className="text-[15px] pb-[10px] flex justify-center items-center">
                      <button className="bg-[#0d6efd] px-[18px] py-[10px] rounded-[6px]">
                        <span className="text-white font-semibold">{t("common:view")}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
