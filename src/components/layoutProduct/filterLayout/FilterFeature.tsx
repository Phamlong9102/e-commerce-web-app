import SortIcon from "@mui/icons-material/Sort";

export default function FilterFeature() {
  return (
    <>
      <div className="block lg:flex justity-start gap-[40px] pb-[24px]">
        <div className="pb-[16px]">
          <div>
            <label htmlFor="text">Số lượng hiển thị:</label>
          </div>
          <div>
            <select className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="">
          <div>
            <label htmlFor="text">Lọc theo</label>
          </div>
          <div className="flex justify-between">
            <select className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down">
              <option value="name">None</option>
              <option value="name">Tên</option>
              <option value="price">Giá</option>
            </select>
            <button className="flex justify-center items-center w-[42px] h-[38px] px-[12px] py-[6px] border-[1px] border-[#6c757d] rounded-[3px]">
              <SortIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
