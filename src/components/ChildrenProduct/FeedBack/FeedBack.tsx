import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Divider } from "@mui/material";

export default function FeedBack() {
  const [value, setValue] = useState<number | null>(2);

  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-[30px]">
        <div className="text-[24px] mb-[32px]">Đánh giá</div>
        <div className="flex gap-[12px]">
          <div className="flex flex-col justify-center">
            <p className="font-semibold font-size-icon-service-flexible">3.7</p>
            <p className="">trên 5</p>
          </div>
          <ul className="ml-[18px]">
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">2</div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">2</div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">2</div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">2</div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">2</div>
            </div>
          </ul>
        </div>
        <div className="mt-[50px]">
          <form className="">
            <div className="font-size-comment pb-[16px]">Bình luận</div>
            <input
              className="w-[100%] height-input-flexible px-[12px] py-[6px] text-[16px] text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da] rounded-[6px] form-style"
              type="text"
            />
            <div className="mt-[16px]">
              <Rating
                sx={{ fontSize: "34px" }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="mt-[16px]">
              <button
                onClick={handleClick}
                className="px-[12px] py-[6px] bg-[#116dfa] hover:bg-[#0b5ed7] rounded-[6px] transition-button leading-[1.5]"
              >
                <span className="text-[white]">Bình luận</span>
              </button>
            </div>
          </form>
        </div>
        <div className="mt-[48px]">
          <div className="flex gap-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div>
                <PersonIcon sx={{ fontSize: "100px" }}/>
              </div>
              <div>Minh Vu</div>
              <div>3 tháng trước</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>sdhgfhj</div>
              <div>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
              </div>
            </div>
          </div>
          <Divider sx={{ marginTop: "16px" }} variant="middle" />
        </div>
        <div className="mt-[20px]">
          <div className="flex gap-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div>
                <PersonIcon sx={{ fontSize: "100px" }}/>
              </div>
              <div>Minh Vu</div>
              <div>3 tháng trước</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>sdhgfhj</div>
              <div>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
                <span><StarBorderIcon /></span>
              </div>
            </div>
          </div>
          <Divider sx={{ marginTop: "16px" }} variant="middle" />
        </div>
        <div className="mt-[20px] mb-[30px] text-center text-[#386dfa] underline text-[20px] cursor-pointer">
            Tải thêm...
        </div>
      </div>
    </>
  );
}
